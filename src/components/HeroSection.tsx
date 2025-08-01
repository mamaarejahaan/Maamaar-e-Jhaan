// import { Play } from "lucide-react"
// import { Button } from "./ui/button"
// import { useState } from "react";
// import { IoIosContact } from "react-icons/io";
// import { FaBehanceSquare, FaInstagramSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { Typewriter } from "react-simple-typewriter";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog"

// const HeroSection = () => {
//     const [isOpen, setIsOpen] = useState(false);
//   return (
//     <section id="hero" className="grid grid-cols-1 md:grid-cols-2 col-reverse  gap-8  
//     min-h-screen  md:pt-40  items-center bg-gray-200 justify-items-center py-24 pb-16 md:py-20 px-8 md:px-10">
//         <div className="flex flex-col justify-center lg:pl-20 order-2 md:order-1">


//           {/* Heading and Paragraph.... */}
//             {/* <h1 className="text-4xl font-bold p-2 text-blue-dark font-nunito mb-2">Empowering minds, changing lives</h1> */}
//             <h1
//             data-aos="fade-up"
//             className="text-4xl font-bold p-2 text-blue-dark  mb-2">
//   <Typewriter
//     words={['Empowering minds, changing lives']}
//     loop={1}
//     cursor={false}
//     cursorStyle="|"
//     typeSpeed={70}
//     deleteSpeed={0}
//     delaySpeed={1000}
//   />
// </h1>

//             <p className="md:text-lg text-gray-700 mb-6 pl-2">
//             To seek the pleasure of Allah through building human life according to the principles laid down by Allah and His Messenger (PBUH).
//             </p>


//              {/* Buttons.... */}
//             <div className="flex space-x-4  items-center">
//                  <a
//                 href="#contact"
                
//               >
//                <Button className="hover:scale-105 btn transition custom-multi-shadow flex gap-2 items-center bg-blue-dark ">
//                  <IoIosContact className="text-lg" />
//                 Contact Us
//                </Button>
//               </a>
//             <Button
//             onClick={()=>setIsOpen(true)}
//             className="border border-blue-dark cursor-pointer bg-transparent hover:bg-transparent text-blue-dark flex items-center justify-center">
//                 <Play className="w-4 h-4"
//                  />
//                 Watch live Video
//             </Button>

               
//             </div>


//             {/* Social Links... */}
//              <div className="flex gap-3 text-3xl bounce-animation text-center  mt-9 text-soft-white ml-1">
//               <a
//                 href={"#"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaBehanceSquare className="custom-multi-shadow  cursor-pointer" />
//               </a>
//               <a
//                 href={"#"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaLinkedin className="custom-multi-shadow  cursor-pointer" />
//               </a>
//               <a
//                 href={"#"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <FaInstagramSquare className="custom-multi-shadow  cursor-pointer" />
//               </a>
//             </div>
//         </div>


//         {/* Right side Image */}
//         <div className=" lg:ml-40   order-1 md:order-2">
//             <img src="Logo.png" alt="Hero" className="w-[350px] rounded-md object-contain h-auto" />
//         </div>


       


//     <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent className="sm:max-w-[425px]">
//           <DialogHeader>
//             <DialogTitle>Documentory</DialogTitle>
//           </DialogHeader>
//      <div className="w-full">
//             <video
//               src="/Documentory.mp4"
//               controls
//               autoPlay
//               className="w-full h-auto rounded-lg"
//             >
//               Your browser does not support the video tag.
//             </video>
//           </div>

//         </DialogContent>
//     </Dialog>
 

//     </section>
//   )
// }

// export default HeroSection


import { Play } from "lucide-react"
import { Button } from "./ui/button"
import { useState } from "react";
import { IoIosContact } from "react-icons/io";
import {  FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
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
      Icon: MdEmail,
      href: "mailto:kashisial2327@gmail.com",
    },
    {
      Icon: FaWhatsappSquare,
      href: "https://wa.me/923314315567", // Replace with your phone number (no + or dashes)
    },
    {
      Icon: FaInstagramSquare,
      href: "https://instagram.com/yourusername", // Replace with your Instagram username
    },
    {
      Icon: FaFacebookSquare,
      href: "https://facebook.com/yourusername", // Replace with your Facebook username/page
    },
  ]
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="hero"
      className="grid grid-cols-1 md:grid-cols-2 col-reverse gap-8 min-h-screen md:pt-40 items-center bg-gray-200 justify-items-center py-24 pb-16 md:py-20 px-8 md:px-10"
    >

      {/* Left content */}
      <div
        className="flex flex-col justify-center lg:pl-20 order-2 md:order-1"
      >
        <h1
          data-aos="fade-up"
          className="text-4xl font-bold p-2 text-blue-dark mb-2"
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
            <Button className="hover:scale-105 btn transition custom-multi-shadow flex gap-2 items-center bg-blue-dark">
              <IoIosContact className="text-lg" />
              Contact Us
            </Button>
          </a>
          <Button
            onClick={() => setIsOpen(true)}
            className="border border-blue-dark cursor-pointer bg-transparent hover:bg-transparent text-blue-dark flex items-center justify-center"
          >
            <Play className="w-4 h-4" />
            Watch live Video
          </Button>
        </div>

        <div className="flex gap-3 text-3xl  text-center mt-9 text-soft-white ml-1">
          {SocialLinks.map((link, i) => (
            <Link
              key={i}
              to={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.Icon className="custom-multi-shadow bounce-animation cursor-pointer" />
            </Link>
          ))}
        </div>
      </div>

      {/* Right image */}
      <div
      data-aos="fade-left"
        className="lg:ml-40 order-1 md:order-2"
      >
        <img
          src="Logo.png"
          alt="Hero"
          className="w-[350px] rounded-md object-contain h-auto"
        />
      </div>

      {/* Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Documentory</DialogTitle>
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
