
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { ScrollArea } from './ui/scroll-area';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { databases, ID } from '@/appwrite/appwrite';
import conf from '@/appwrite/conf';
import emailjs from "@emailjs/browser"
const Questions = [
  'What do you know about our vision?',
  'Why you want to join us?',
  'What does Iqbal philosphy mean to you as a student?',
  'What is your relation with Quran?',
  'Enlist your hobbies?',
  'Enlist the book you read other than academic book?',
];

const step1Schema = z.object({
  fullname: z.string().min(1, 'Name is required'),
  class: z.string().min(1, 'Class is required'),
  department: z.string().min(1, 'Department is required'),
  sargodhaAddress: z.string().min(1, 'Street address is required'),
  permanentAddress: z.string().min(1, 'Permanent address is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Phone number is required'),
  bloodGroup: z.string().optional(),
});

const step2Schema = z.object({
  q1: z.string().min(1, 'This question is required'),
  q2: z.string().min(1, 'This question is required'),
  q3: z.string().min(1, 'This question is required'),
  q4: z.string().min(1, 'This question is required'),
  q5: z.string().optional(),
  q6: z.string().optional(),
});

type Step1FormData = z.infer<typeof step1Schema>;
type Step2FormData = z.infer<typeof step2Schema>;

interface Props {
  label: string;
  value: string[];
  setValue: (val: string[]) => void;
  error?: string;
  setChip5Error:(val:string)=>void
  setChip6Error:(val:string)=>void
}

const ChipInput: React.FC<Props> = ({ label, value, setValue, error,setChip5Error,setChip6Error }) => {
  const [input, setInput] = useState('');

  const addChip = () => {
    const trimmed = input.trim();
    if (trimmed && !value.includes(trimmed)) {
      setValue([...value, trimmed]);
      setInput('');
    }
  };

  const removeChip = (index: number) => {
    const newChips = [...value];
    newChips.splice(index, 1);
    setValue(newChips);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addChip();
    }
  };

  return (
    <div>
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2 mt-2 border border-gray-300 rounded-md p-2 min-h-[46px]">
        {value.map((chip, idx) => (
          <div key={idx} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm flex items-center gap-1">
            {chip}
            <button type="button" onClick={() => removeChip(idx)} className="text-red-500 hover:text-red-700 text-xs ml-1">
              ✕
            </button>
          </div>
        ))}
        <input
          className="flex-1 min-w-[100px] outline-none bg-transparent"
          value={input}
          onChange={(e) => {
            if(label.includes("Enlist your hobbies")){
              setChip5Error("")
            }
            if(label.includes("Enlist the book")){
              setChip6Error("")
            }
            setInput(e.target.value)
          }}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter or click Add button"
        />
      </div>
      <div className="mt-2 flex md:hidden justify-end">
        <Button size="sm" type="button" 
        className='text-indigo-700 hover:text-indigo-700 border border-indigo-700 bg-transparent hover:bg-transparent'
        onClick={addChip}>
          Add
        </Button>
      </div>
      {error && <p className="text-xs text-red-500 pl-1 mt-1">{error}</p>}
    </div>
  );
};

interface JoinUsProps {
  setDialogOpen: (val: boolean) => void;
}

const JoinUsForm: React.FC<JoinUsProps> = ({ setDialogOpen }) => {
  const [step, setStep] = useState(1);
  const [isJoining, setIsJoining] = useState(false);
  const [formData, setFormData] = useState<Step1FormData | null>(null);
  const [q5Chips, setQ5Chips] = useState<string[]>([]);
  const [q6Chips, setQ6Chips] = useState<string[]>([]);
  const [chip5Error,setChip5Error]=useState("")
   const [chip6Error,setChip6Error]=useState("")

  const {
    register: registerStep1,
    handleSubmit: handleSubmitStep1,
    formState: { errors: errorsStep1 },
    reset: resetStep1,
  } = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
  });

  const {
    register: registerStep2,
    handleSubmit: handleSubmitStep2,
    formState: { errors: errorsStep2 },
    reset: resetStep2,
  } = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
  });

  const onSubmitStep1 = (data: Step1FormData) => {
    setFormData(data);
    setStep(2);
  };

  const onSubmitStep2 = async (data: Step2FormData) => {
    if (!formData) return;
    if(q5Chips.length>0){
      setChip5Error("")
    }
    if(q6Chips.length>0){
      setChip6Error("")
    }
    if(q5Chips.length===0 && q6Chips.length===0){
      setChip5Error("This question is required") 
       setChip6Error("This question is required")
      return
    }
    if(q5Chips.length===0){
      setChip5Error("This question is required")
      return
    }
    if(q6Chips.length===0){
      setChip6Error("This question is required")
      return
    }
    const answersArray = Questions.map((q, index) => {
      let answer = '';
      if (index === 4) {
        answer = q5Chips.join(', ');
      } else if (index === 5) {
        answer = q6Chips.join(', ');
      } else {
        answer = data[`q${index + 1}` as keyof Step2FormData] || '';
      }
      return { question: q, answer };
    });

    const fullData = {
      ...formData,
      answersArray: JSON.stringify(answersArray),
    };

    const toastId = toast.loading('Processing...');
    try {
      setIsJoining(true);
      await databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        ID.unique(),
        fullData
      );
       const templateParams = {
    name: fullData.fullname,
    email:fullData.email,
    phone:fullData.phone,
    class:fullData.class,
    department:fullData.department,
    sargodhaAddress:fullData.sargodhaAddress,
    permanentAddress:fullData.permanentAddress,
    bloodGroup:fullData.bloodGroup || "N/A",
    time: new Date().toLocaleString(),
    website_link:conf.websiteURL
  };
      await emailjs.send(
        conf.emailjsServiceId,
        conf.emailjsJoinusFormTemplatedId,
        templateParams,
      conf.emailjsPublicKey
      )
      toast.success('Thank you for joining us, we will contact you soon!', { id: toastId });
      setDialogOpen(false);
      resetStep1();
      resetStep2();
      setQ5Chips([]);
      setQ6Chips([]);

    } catch (error) {
      console.error('Error saving to Appwrite:', error);
      toast.error('Something went wrong while submitting. Try again.', { id: toastId });
    } finally {
      setIsJoining(false);
    }
  };

  return (
    <ScrollArea className="w-full max-w-xl pr-4">
      {step === 1 && (
        <form onSubmit={handleSubmitStep1(onSubmitStep1)} className="space-y-4 py-2 max-w-xl mx-auto w-full">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">
            Step 1: Basic Information
          </h2>

          {(
            [
              'fullname',
              'class',
              'department',
              'sargodhaAddress',
              'permanentAddress',
              'email',
              'phone',
              'bloodGroup (Optional)',
            ] as (keyof Step1FormData)[]
          ).map((field) => (
            <div key={field}>
              <Input
                {...registerStep1(field)}
                placeholder={`Enter your ${field.replace(/([A-Z])/g, ' $1')}`}
                className='placeholder:capitalize'
                type={field === 'email' ? 'email' : 'text'}
              />
              <p className="text-xs text-red-500 mt-1 pl-1">{errorsStep1[field]?.message}</p>
            </div>
          ))}

          <div className="flex justify-between">
            <Button
              type="button"
              className="border bg-transparent hover:bg-transparent border-blue-dark bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text cursor-pointer hover:text-blue-dark"
              onClick={() => {
                setDialogOpen(false);
                resetStep1();
                resetStep2();
              }}
            >
              Close
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-blue-dark to-indigo-700 hover:bg-blue-dark cursor-pointer">
              Next
            </Button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleSubmitStep2(onSubmitStep2)} className="space-y-4 py-2 max-w-xl mx-auto w-full">
          <h2 className="text-lg font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">
            Step 2: Answer These Questions in 2-3 lines
          </h2>

          {Questions.slice(0, 4).map((q, index) => (
            <div key={index}>
              <Label className="mb-2">{q}</Label>
              <Textarea
                {...registerStep2(`q${index + 1}` as keyof Step2FormData)}
                placeholder="Write your answer"
                className="resize-none"
              />
              <p className="text-xs text-red-500 pl-1 mt-1">
                {errorsStep2[`q${index + 1}` as keyof Step2FormData]?.message}
              </p>
            </div>
          ))}

          <ChipInput label={Questions[4]} value={q5Chips} setValue={setQ5Chips} setChip5Error={setChip5Error}
          setChip6Error={setChip6Error} />
          {
            chip5Error && <p className='text-xs text-red-500 pl-1 -mt-13 md:-mt-3'>{chip5Error}</p>
          }
          <div className='mt-10 md:mt-0'>
            <ChipInput label={Questions[5]} value={q6Chips} setValue={setQ6Chips}
            setChip5Error={setChip5Error}
          setChip6Error={setChip6Error} />
          </div>
           {
            chip6Error && <p className='text-xs text-red-500 pl-1 -mt-13 md:-mt-3'>{chip6Error}</p>
          }

          <div className="flex justify-between gap-4 mt-14 md:mt-4">
            <Button
              variant="secondary"
              className="border cursor-pointer border-blue-dark text-blue-dark hover:text-blue-dark"
              type="button"
              onClick={() => setStep(1)}
              disabled={isJoining}
            >
              Back
            </Button>
            <Button
              type="submit"
              className="bg-gradient-to-r from-blue-dark to-indigo-700 hover:bg-blue-dark cursor-pointer"
              disabled={isJoining}
            >
              Join Us
            </Button>
          </div>
        </form>
      )}
    </ScrollArea>
  );
};

export default JoinUsForm;
