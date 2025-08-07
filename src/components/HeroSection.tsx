import { Play } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import {  FaInstagramSquare} from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillDingtalkSquare } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Link } from "react-router-dom";

const SocialLinks=[
    {
      Icon: FaFacebookSquare,
      href: "https://www.facebook.com/share/1VH4tPwch7/", 
    },
    {
      Icon: FaInstagramSquare,
      href: "https://www.instagram.com/mamaarejahaan", 
    },
    {
      Icon: AiFillDingtalkSquare,
      href: "https://www.instagram.com/medtalks0",
    },
  ]
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const navigate=useNavigate()

  return (
    <section
      id="hero"
      className="relative grid grid-cols-1
      md:grid-cols-2 col-reverse gap-8 min-h-screen w-screen overflow-x-hidden  md:pt-40 items-center bg-gray-200 justify-items-center py-24 pb-16 md:py-20 px-8 md:px-10"
    >

      {/* Left content */}
      <div
        className="flex flex-col justify-center lg:pl-20 order-2 md:order-1"
      >
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold p-2 capitalize bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-2"
        >
          <Typewriter
            words={['Empowering minds, changing lives']}
            loop={1}
            cursor={false}
            typeSpeed={70}
            deleteSpeed={0}
            delaySpeed={1000}
          />
        </h1>

        <p
        data-aos="zoom-in"
          className="md:text-lg text-gray-700 mb-6 pl-2"
        >
          To seek the pleasure of Allah through building human life according
          to the principles laid down by Allah and His Messenger (PBUH).
        </p>

        <div className="flex space-x-4 items-center"
        data-aos="fade-left">
          <a href="#contact">
            <Button className="hover:scale-105 cursor-pointer transition  flex gap-2 items-center bg-gradient-to-r from-blue-dark to-indigo-700 ">
              <IoIosContact className="text-lg" />
              Contact Us
            </Button>
          </a>
          <Button
            onClick={() => setIsOpen(true)}
            className="border border-blue-dark  cursor-pointer bg-transparent hover:bg-transparent text-blue-dark flex items-center justify-center"
          >
            <Play className="mt-0.5" />
            How it's started
          </Button>

        </div>
        <div
  className="flex md:flex-col flex-row gap-3
  absolute right-6 md:right-8 top-[68px] md:top-28
  items-center md:items-start
  text-indigo-700"
>
  {SocialLinks.map((link, i) => (
    <Link
      key={i}
      to={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <link.Icon
        className="
          text-4xl
          transition-all duration-300 ease-in-out
          group-hover:text-indigo-700
          custom-multi-shadow
          group-hover:scale-110
          shadow-md hover:shadow-lg
          rounded-full p-2 bg-white
        "
      />
    </Link>
  ))}
</div>

      </div>

      {/* Right image */}
      <div
      data-aos="fade-left"
        className="lg:ml-40 mt-4 md:mt-0 order-1 md:order-2"
      >
        <img
          src="Logo.png"
          alt="Hero"
          className="w-[350px] rounded-md object-contain h-auto"
        />
      </div>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle
            className="bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text"
            >How it's started</DialogTitle>
          </DialogHeader>
          <div className="w-full">
            <video
              src="/Documentory.mp4"
              controls
              autoPlay
              className="w-full h-auto rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HeroSection;
