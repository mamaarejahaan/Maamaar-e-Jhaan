import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {  databases, storage, ID } from '@/appwrite/appwrite';
import { toast } from 'react-hot-toast';
import CustomLoader from './loader';
import conf from '@/appwrite/conf';

const formSchema = z.object({
  image: z.any().refine((file) => file?.length === 1, 'Image is required'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  url: z.string().url('Enter a valid URL'),
});

type FormData = z.infer<typeof formSchema>;

interface Props{
    setIsAnnouncementOpen:(val:boolean)=>void
}
const CreateAnnouncementForm:React.FC<Props> = ({setIsAnnouncementOpen}) => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Upload image to Appwrite storage
      const file = data.image[0];
      const uploadedFile = await storage.createFile(
        conf.appwriteBucketId, ID.unique(), file);
        const uploadedURL=await storage.getFileView(conf.appwriteBucketId,uploadedFile.$id)

      // Create a new document or store in DB with URL + image ID + description
      await databases.createDocument(conf.appwriteDatabaseId,conf.appwriteAnnouncementCollectionId, ID.unique(), {
        description: data.description,
        googleFormURL: data.url,
        imageURL:uploadedURL,
      });

      toast.success('Announcement created!');
      reset();
      setIsAnnouncementOpen(false)
    } catch (err: any) {
      console.log(err);
      toast.error('Failed to create announcement');
    } 
  };

  return (
    <div>
              <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Create New Announcement</h2>
      <p className="text-sm mt-1 text-center text-gray-700">Provide the following details to create announcement</p>
    
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto space-y-5 p-4">
      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Image</label>
        <Input type="file" accept="image/*" {...register('image')} />
        {errors.image && <p className="text-sm text-red-500">{errors.image.message as string}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Description</label>
        <Textarea placeholder="Enter announcement description"
        className='h-32 resize-none'
        {...register('description')} />
        {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium text-gray-700">Google Form URL</label>
        <Input placeholder="https://example.com" {...register('url')} />
        {errors.url && <p className="text-sm text-red-500">{errors.url.message}</p>}
      </div>

      <Button type="submit"  disabled={isSubmitting} className="w-full
      cursor-pointer
      bg-gradient-to-r from-blue-dark to-indigo-700 hover:bg-blue-dark">
        {isSubmitting ? <CustomLoader /> : 'Create Announcement'}
      </Button>
      <Button
          disabled={isSubmitting}
          onClick={()=>setIsAnnouncementOpen(false)}
          type="button"
          className="w-full border border-blue-dark cursor-pointer -mt-1 bg-transparent hover:bg-transparent  text-blue-dark hover:text-blue-dark"
        >
          Cancel
        </Button>
    </form>
    </div>
  );
};

export default CreateAnnouncementForm;
