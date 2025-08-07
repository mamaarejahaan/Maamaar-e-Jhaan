import { account } from '@/appwrite/appwrite';
import { CustomPageLoader } from '@/components/loader';
import { useAuthStore } from '@/zustand/authStore';
import  { useEffect, useState } from 'react'
import AdminPage from './AdminPage';
import AdminLogin from './AdminLogin';


const AdminAccessPage = () => {
    const {session,setSession}=useAuthStore()
    const [isLoading,setIsLoading]=useState(true)
      useEffect(() => {
       const checkAuth=async()=>{
       try {
        setIsLoading(true)
         const session=await account.get()
        setSession(session)
       } catch (error) {
        console.log("error in checking Auth",error)
        setSession(null)
       }
       finally{
        setIsLoading(false)
       }
      }
      checkAuth()
    }, []);


    if(isLoading) return <CustomPageLoader />

    return session ? <AdminPage /> : <AdminLogin />;

  
}

export default AdminAccessPage