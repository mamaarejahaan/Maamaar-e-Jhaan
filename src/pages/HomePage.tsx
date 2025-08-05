import AboutUs from '@/components/AboutUs'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Resources from '@/components/Resources'
import ContactUs from '@/components/ContactUs'
import Collaborator from '@/components/Collaborator'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
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