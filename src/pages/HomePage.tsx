import AboutUs from '@/components/AboutUs'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Resources from '@/components/Resources'
import ContactUs from '@/components/ContactUs'
import Collaborator from '@/components/Collaborator'
import { useEffect, useState } from 'react'
import { databases } from '@/appwrite/appwrite'
import conf from '@/appwrite/conf'
import { useAuthStore } from '@/zustand/authStore'
import { CustomPageLoader } from '@/components/loader'

const HomePage = () => {
  const {setShowJoinUs}=useAuthStore()
    const [isLoading,setisLoading]=useState(false)
  useEffect(()=>{
    window.scrollTo(0,0)
     const fetchShowJoin = async () => {
      try {
        setisLoading(true)
        const res = await databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteSettingCollectionId,
          conf.appwriteSettingDocumentId
        );
        setShowJoinUs(res.joinusVisibility);
        
      } catch (err) {
        console.error("Error fetching Join setting:", err);
      }
      finally{
        setisLoading(false)
      }
    };
    fetchShowJoin()
  },[])
  

  if(isLoading) return <CustomPageLoader />
  return (
    <div>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <Collaborator />
    <Resources />
    <ContactUs />
    </div>
  )
}

export default HomePage