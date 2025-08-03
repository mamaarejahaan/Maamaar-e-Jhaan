import { Route,  Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import {  Toaster } from "react-hot-toast"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuthStore } from "./zustand/authStore";
import { account } from "./appwrite/appwrite";
import AdminAccessPage from "./pages/AdminAccessPage";
import AnnouncementPage from "./pages/AnnouncementPage";


function App() {
 const {setSession}=useAuthStore()
  useEffect(() => {
  AOS.init({
    duration: 800, 
    easing: "ease-in-out",
    once: false, 
  });
   const checkAuth=async()=>{
   try {
     const session=await account.get()
    setSession(session)
   } catch (error) {
    console.log("error in checking Auth",error)
    setSession(null)
   }
  }
  checkAuth()
}, []);



  return (
   
     <div>
      <Toaster position="bottom-right" /> 
       <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminAccessPage />} />
         <Route path="/announcement" element={<AnnouncementPage />} />
      </Routes>
     </div>
   
  )
}

export default App
