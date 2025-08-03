
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import toast from 'react-hot-toast';
import { Button } from './ui/button';
import { account } from '@/appwrite/appwrite';
import CustomLoader from './loader';
import { Input } from './ui/input';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';


const schema = z
  .object({
    password: z.string().min(1, 'Current password is required'),
    newPassword: z.string().min(8, 'New password must be at least 8 characters'),
    confirmNewPassword: z.string().min(8, 'Confirm password is required'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New passwords don't match",
    path: ['confirmNewPassword'],
  });

type ChangePasswordValues = z.infer<typeof schema>;

interface Props{
    setIsOpen:(val:boolean)=>void
}
const ChangePasswordForm:React.FC<Props> = ({setIsOpen}) => {
    const [showOldPassword,setShowOldPassword]=useState(false)
    const [showNewPassword,setShowNewPassword]=useState(false)
    const [showConfirmPassword,setShowConfirmPassword]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ChangePasswordValues>({
    resolver: zodResolver(schema),
  });

  

  const onSubmit = async (data: ChangePasswordValues) => {
  try {
    await account.updatePassword(data.newPassword, data.password);
    toast.success('Password updated successfully!');
    setIsOpen(false);
    reset();
  } catch (error: any) {
    const errorMessage = error?.message?.toLowerCase() || '';

    if (errorMessage.includes('invalid credentials')) {
      toast.error('Old password is incorrect');
      return;
    }

    toast.error(error.message || 'Failed to update password');
  }
};


  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Change Password</h2>
      <p className="text-sm mt-1 text-center text-gray-700">Update your admin account password</p>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <div className='relative'>
      <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
      <Input
        type={showOldPassword ? 'text' : 'password'}
        {...register('password')}
        className="w-full pr-10"
        placeholder="Current password"
      />
      <div
        className='absolute right-3 top-9 cursor-pointer text-gray-600'
        onClick={() => setShowOldPassword((prev) => !prev)}
      >
        {showOldPassword ? <Eye size={16} /> : <EyeOff size={16} />}
      </div>
      {errors.password && <p className="text-xs text-red-500 mt-1">{errors.password.message}</p>}
    </div>

        <div className='relative'>
          <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
          <Input
              type={showNewPassword ? 'text' : 'password'}
            {...register('newPassword')}
            className="w-full"
            placeholder="New password"
          />
          <div
        className='absolute right-3 top-9 cursor-pointer text-gray-600'
        onClick={() => setShowNewPassword((prev) => !prev)}
      >
        {showNewPassword ? <Eye size={16} /> : <EyeOff size={16} />}
      </div>
          {errors.newPassword && <p className="text-xs text-red-500 mt-1">{errors.newPassword.message}</p>}
        </div>

        <div className='relative'>
          <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
          <Input
              type={showConfirmPassword ? 'text' : 'password'}
            {...register('confirmNewPassword')}
            className="w-full"
            placeholder="Confirm password"
          />
          <div
        className='absolute right-3 top-9 cursor-pointer text-gray-600'
        onClick={() => setShowConfirmPassword((prev) => !prev)}
      >
        {showConfirmPassword ? <Eye size={16} /> : <EyeOff size={16} />}
      </div>
          {errors.confirmNewPassword && (
            <p className="text-xs text-red-500 mt-1">{errors.confirmNewPassword.message}</p>
          )}
        </div>

        <Button
          disabled={isSubmitting}
          type="submit"
          className="w-full bg-gradient-to-r from-blue-dark to-indigo-700  hover:bg-blue-dark cursor-pointer"
        >
          {isSubmitting ? <CustomLoader /> : 'Update Password'}
        </Button>
        <Button
          disabled={isSubmitting}
          onClick={()=>setIsOpen(false)}
          type="button"
          className="w-full border border-blue-dark cursor-pointer -mt-1 bg-transparent hover:bg-transparent  text-blue-dark hover:text-blue-dark"
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
