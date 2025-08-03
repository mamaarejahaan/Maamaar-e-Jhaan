import { account } from '@/appwrite/appwrite';
import CustomLoader from '@/components/loader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuthStore } from '@/zustand/authStore';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [showPassword,setShowPassword]=useState(false)
  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm();
  const setSession = useAuthStore((state:any) => state.setSession);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
        const existingSession = await account.get();
if (existingSession) {
  await account.deleteSession('current');
}
      const session = await account.createEmailPasswordSession(data.email, data.password);
      setSession(session);
      navigate('/admin'); 
    } catch (error: any) {
        console.log("error in logging-in",error)
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-dark to-indigo-700  px-4">
      <div className="bg-white shadow-md rounded-xl p-8  w-full max-w-md">
        <button
            onClick={() => navigate(-1)}
            className="text-sm bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text cursor-pointer flex gap-1 items-center justify-center"
          >
            <span className="text-2xl -mt-0.5">←</span> Back
          </button>
        <h2 className="text-2xl font-bold text-center  bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Admin Login</h2>
        <p className='text-sm mt-1 text-center text-gray-700'>Enter following credentials to get Admin access</p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full"
              placeholder="admin@example.com"
            />
            {errors.email  && <p className="text-sm text-red-500 mt-1">{errors.email.message as string}</p>}
          </div>

          <div className='relative'>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input
                type={showPassword ? 'text' : 'password'}
              {...register('password', { required: 'Password is required' })}
              className="w-full"
              placeholder="••••••••"
            />
            <div
        className='absolute right-3 top-9 cursor-pointer text-gray-600'
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
      </div>
            {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message as string}</p>}
          </div>

          <Button
          disabled={isSubmitting}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-dark to-indigo-700 hover:bg-blue-dark cursor-pointer"
          >
            {isSubmitting?<CustomLoader />:"Login"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
