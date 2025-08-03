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





const Questions=["What do you know about our vision?",
    "Why you want to join us?",
    "What does Iqbal philosphy mean to you as a student?",
    "What is your relation with Quran?",
    "Enlist at least your three hobies? (separated with comma)",
    "Enlist the book you read other than academic book? (separated with comma)"
]

// Step 1 schema
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

// Step 2 schema
const step2Schema = z.object({
  q1: z.string().min(1, 'This question is required'),
  q2: z.string().min(1, 'This question is required'),
  q3: z.string().min(1, 'This question is required'),
  q4: z.string().min(1, 'This question is required'),
  q5: z.string().min(1, 'This question is required'),
  q6: z.string().min(1, 'This question is required'),
});

type Step1FormData = z.infer<typeof step1Schema>;
type Step2FormData = z.infer<typeof step2Schema>;


interface Props{
    setDialogOpen:(val:boolean)=>void
}
const JoinUsForm:React.FC<Props> = ({setDialogOpen}) => {
  const [step, setStep] = useState(1);
  const [isJoining,setIsJoining]=useState(false)
  const [formData,setFormData]=useState({})
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


  const onSubmitStep1 = (data:Step1FormData) => {
    setFormData({
   fullname: data.fullname,
  class: data.class,
  department: data.department,
  sargodhaAddress: data.sargodhaAddress,
  permanentAddress:data.permanentAddress,
  email: data.email,
  phone: data.phone,
  bloodGroup: data.bloodGroup || "",

    })
    setStep(2)
  };
   const onSubmitStep2 = async(data: Step2FormData) => {
      const answersArray = Questions.map((q, index) => ({
    question: q,
    answer: data[`q${index + 1}` as keyof Step2FormData],
  }));

  const fullData = {
    ...formData,
    answersArray: JSON.stringify(answersArray),
  };
      const toastId=toast.loading("Processing...")
      console.log("fulldaata",fullData)
    try {
     setIsJoining(true)
    await databases.createDocument(
    conf.appwriteDatabaseId,
    conf.appwriteCollectionId,
    ID.unique(),
    fullData
    )    
     toast.success('Thank you for joining us, we will contact you soon!',{id:toastId});
    setDialogOpen(false);
    resetStep1();
    resetStep2();
    } catch (error) {
        console.error('Error saving to Appwrite:', error);
    toast.error('Something went wrong while submitting. Try again.',{id:toastId});
    }
    finally{
        setIsJoining(false)
    }
  };

 

  return (
    <ScrollArea className="w-full max-w-xl pr-4">
      <>
        {step === 1 && (
          <form onSubmit={handleSubmitStep1(onSubmitStep1)} className="space-y-4 py-2 max-w-xl mx-auto w-full">
            <h2 className="text-lg font-semibold
            bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text
            ">Step 1: Basic Information</h2>

            <div>
              <Input {...registerStep1('fullname')} placeholder="Full Name" />
              <p className="text-xs text-red-500 mt-1 pl-1">{errorsStep1.fullname?.message}</p>
            </div>

            <div>
              <Input {...registerStep1('class')} placeholder="Class" />
              <p className="text-xs text-red-500 mt-1 pl-1">{errorsStep1.class?.message}</p>
            </div>

            <div>
              <Input {...registerStep1('department')} placeholder="Department" />
              <p className="text-xs text-red-500 mt-1 pl-1">{errorsStep1.department?.message}</p>
            </div>

            <div>
              <Input {...registerStep1('sargodhaAddress')} placeholder="Sargodha Address" />
              <p className="text-xs text-red-500 mt-1 pl-1">{errorsStep1.sargodhaAddress?.message}</p>
            </div>

            <div>
              <Input {...registerStep1('permanentAddress')} placeholder="Permanent Address" />
              <p className="text-xs text-red-500 mt-1 pl-1">{errorsStep1.permanentAddress?.message}</p>
            </div>

            <div>
              <Input {...registerStep1('email')} type="email" placeholder="Email" />
              <p className="text-xs text-red-500 mt-1 pl-1">{errorsStep1.email?.message}</p>
            </div>

            <div>
              <Input {...registerStep1('phone')} placeholder="Phone" />
              <p className="text-xs text-red-500 mt-1 pl-1">{errorsStep1.phone?.message}</p>
            </div>

            <div>
              <Input {...registerStep1('bloodGroup')} placeholder="Blood Group (Optional)" />
            </div>
           <div className='flex justify-between'>
            <Button 
            type='button'
              className='border bg-transparent hover:bg-transparent border-blue-dark bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text cursor-pointer hover:text-blue-dark'
              onClick={() => {
                setDialogOpen(false)
                resetStep1()
                resetStep2()
              }}>
                Close
              </Button>
            <Button type="submit"  className='bg-gradient-to-r from-blue-dark to-indigo-700  hover:bg-blue-dark cursor-pointer float-end' >
              Next
            </Button>
                       </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmitStep2(onSubmitStep2)} className="space-y-4 py-2 max-w-xl mx-auto w-full">
            <h2 className="text-lg font-semibold
            bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Step 2: Answer These Questions in 2-3 lines</h2>

            {Questions.map((num,index) => (
              <div key={index}>

 
                <Label className='mb-2'>{num}</Label>
                <Textarea
                  {...registerStep2(`q${index+1}` as keyof Step2FormData)}
                  placeholder="Write your answer"
                  className='resize-none'
                />
 
                <p className="text-xs text-red-500 pl-1 mt-1">
                  {errorsStep2[`q${index+1}` as keyof Step2FormData]?.message as string}
                </p>
              </div>
            ))}

            <div className="flex justify-between gap-4 mt-4">
              <Button variant="secondary"
              className='border cursor-pointer border-blue-dark text-blue-dark cursor-pointer hover:text-blue-dark'
              type="button" onClick={() => setStep(1)}
              disabled={isJoining}>
                Back
              </Button>
              <Button type="submit" className='bg-gradient-to-r from-blue-dark to-indigo-700 hover:bg-blue-dark cursor-pointer'
              disabled={isJoining}>Join Us</Button>
            </div>
          </form>
        )}
      </>
    </ScrollArea>
  );
};

export default JoinUsForm;
