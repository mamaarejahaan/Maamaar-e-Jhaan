import AboutUs from '@/components/AboutUs'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Resources from '@/components/Resources'
import ContactUs from '@/components/ContactUs'
import Collaborator from '@/components/Collaborator'

const HomePage = () => {
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