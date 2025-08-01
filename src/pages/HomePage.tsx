import AboutUs from '@/components/AboutUs'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Resources from '@/components/Resources'
import ContactUs from '@/components/ContactUs'

const HomePage = () => {
  return (
    <div>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <Resources />
    <ContactUs />
    </div>
  )
}

export default HomePage