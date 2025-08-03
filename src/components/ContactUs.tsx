// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
// import toast from "react-hot-toast";

// const ContactUs = () => {
//     const [name,setName] = useState("");
//     const [email,setEmail] = useState(""); 
//     const [message,setMessage] = useState("");


//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         if(!name || !email || !message) {
//             toast.error("Please fill all fields");
//             return
//         }
//         alert("submitted");
//         setName("");
//         setEmail("");
//         setMessage("");
//     }
//   return (
//     <section id="contact" className="py-20 px-8 md:px-32 space-y-16">
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-blue-dark mb-0">Contact Us</h2>
//         <p className="text-gray-700">We’d love to hear from you! Fill out the form below and we’ll get in touch soon.</p>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-2xl mx-auto space-y-6 bg-white p-8 shadow-md shadow-blue-dark rounded-lg"
//       >
//         {/* Name */}
//         <div className="space-y-2">
//           <Label htmlFor="name">Name</Label>
//           <Input id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Your full name" />
//         </div>

//         {/* Email */}
//         <div className="space-y-2">
//           <Label htmlFor="email">Email</Label>
//           <Input
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//             id="email"
//             type="email"
//             placeholder="your@email.com"
            
//           />
//         </div>

//         {/* Message */}
//         <div className="space-y-2">
//           <Label htmlFor="message">Message</Label>
//           <Textarea
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             id="message"
//             placeholder="Your message..."
//             className="resize-none"
//             rows={5}
            
//           />
//         </div>

//         {/* Submit */}
//         <Button type="submit"
        
//         className="w-full btn">
//           Send Message
//         </Button>
//       </form>
//     </section>
//   );
// };

// export default ContactUs;


import {  useState } from "react";
import {  FaInstagramSquare } from "react-icons/fa";
// import { FaFacebookSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsappSquare } from "react-icons/fa";
import { AiFillDingtalkSquare } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { MdOutlineShare } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";

const SocialLinks=[
    {
      Icon: MdEmail,
      href: "mailto:mamaarejahaan@gmail.com ",
    },
    {
      Icon: FaWhatsappSquare,
      href: "https://wa.me/923194760659", 
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
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Thank you for contacting us, we will react you out soon!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="py-20 px-8 md:px-32 space-y-16 bg-gray-50"
      data-aos="fade-up"
    >
      <div className="text-center space-y-2" data-aos="zoom-in">
        <h2 className="text-4xl font-bold text-blue-dark">Contact Us</h2>
        <p className="text-gray-700 text-lg">
          We’d love to hear from you! Fill out the form below and we’ll get in touch soon.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6   px-6 py-8  shadow-sm shadow-blue-dark rounded-lg"
        data-aos="fade-up"
      >
         <div className="flex justify-center text-blue-dark gap-2 items-center">
          <h1 className="text-3xl font-semibold ">
            Get in Touch
          </h1>
          <MdOutlineShare className="w-6 h-6 mt-2 font-bold " />
        </div>
        <hr className="border border-gray-300 -mt-3" />
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="name" className="font-semibold">Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-semibold">Message</Label>
          <Textarea
            id="message"
            rows={5}
            className="resize-none"
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full btn flex items-center justify-center gap-2">
          Send Message
        <IoMdSend className="mt-1  ml-1"/>
        </Button>
      </form>

     <div className="flex flex-col items-center justify-center mt-4 -ml-2 gap-8">
       <div className="flex flex-col items-center justify-center  text-3xl font-bold text-blue-dark">
        <div className="flex  items-center justify-between ">
          <div className="w-7 h-[1px] bg-blue-dark mt-4 mr-1.5"></div>
          <p>Connect with Us</p>
        </div>
      </div>
      <div className="flex gap-5  text-3xl sm:text-4xl text-center w-full  justify-center  pl-7 text-gray-700 ">
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
    </section>
  );
};

export default ContactUs;
