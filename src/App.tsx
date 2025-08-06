import { Route,  Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import {  Toaster } from "react-hot-toast"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAuthStore } from "./zustand/authStore";
import { account, databases } from "./appwrite/appwrite";
import AdminAccessPage from "./pages/AdminAccessPage";
import AnnouncementPage from "./pages/AnnouncementPage";
import EventsActivitiesPage from "./pages/EventsActivitiesPage";
import AdminAnnouncementPage from "./pages/AdminAnnouncementPage";
import ExploreSMCPage from "./pages/ExploreSMCPage";
import conf from "./appwrite/conf";


function App() {
 const {setSession,setShowJoinUs}=useAuthStore()
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
   const fetchShowJoin = async () => {
      try {
        const res = await databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteSettingCollectionId,
          conf.appwriteSettingDocumentId
        );
        setShowJoinUs(res.joinusVisibility);
      } catch (err) {
        console.error("Error fetching Join setting:", err);
      }
    };
    fetchShowJoin()
  checkAuth()
}, []);



  return (
   
     <div>
      <Toaster position="bottom-right" /> 
       <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminAccessPage />} />
         <Route path="/announcement" element={<AnnouncementPage />} />
         <Route path="/admin-announcement" element={<AdminAnnouncementPage />} />
           <Route path="/events-and-activities" element={<EventsActivitiesPage />} />
            <Route path="/explore-smc" element={<ExploreSMCPage />} />
      </Routes>
     </div>
   
  )
}

export default App
