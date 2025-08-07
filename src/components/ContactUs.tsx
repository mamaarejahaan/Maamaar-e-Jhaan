import {  useState } from "react";
import {  FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillDingtalkSquare } from "react-icons/ai";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import {  MdOutlineShare } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import WhatsAppCommunitySection from "./WhatsAppCommunitySection";
import emailjs from "@emailjs/browser";
import conf from "@/appwrite/conf";
import CustomLoader from "./loader";


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
const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending,setIsSending]=useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!name || !email || !message) {
    toast.error("Please fill all fields");
    return;
  }

  const templateParams = {
    name: name,
    email: email,
    time: new Date().toLocaleString(),
    message: message,
  };

  setIsSending(true);

  try {
    await emailjs.send(
      conf.emailjsServiceId,
      conf.emailjsTemplateId,
      templateParams,
      conf.emailjsPublicKey
    );

    toast.success("Thank you for contacting us! Email sent successfully.");
    setName("");
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error("EmailJS Error:", error);
    toast.error("Something went wrong while sending the email.");
  } finally {
    setIsSending(false);
  }
};



  return (
    <section
      id="contact"
      className="py-20 px-8 md:px-32 w-screen overflow-x-hidden  space-y-16"
      data-aos="fade-up"
    >
      <div className="text-center space-y-2" data-aos="zoom-in">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Contact Us</h2>
        <p className="text-gray-700 text-lg">
          We’d love to hear from you! Fill out the form below and we’ll get in touch soon.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6   px-4 md:px-6 py-8  shadow-sm shadow-blue-dark rounded-lg"
        data-aos="fade-up"
      >
         <div className="flex justify-center text-blue-dark gap-2 items-center">
          <h1 className="text-3xl font-semibold ">
            Get in Touch
          </h1>
          <MdOutlineShare className="w-6 h-6 mt-2 font-bold" />
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
            placeholder="Your email"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="font-semibold">Message</Label>
          <Textarea
            id="message"
            
            className="resize-none h-20"
            placeholder="Type Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {/* Submit */}
        <Button type="submit" disabled={isSending} className="w-full btn flex items-center justify-center gap-2">
        {
          isSending?<CustomLoader />:(
            <>
              Send Message
        <IoMdSend className="mt-0.5 md:mt-1  ml-1"/>
            </>
          )
        }
        </Button>
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between items-center  text-sm text-indigo-700">
        <p className="text-blue-dark text-base font-medium">Contact via Whatsapp</p>
        <Link
                to="https://wa.me/923194760659"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-row justify-between  md:flex-col gap-2 text-xs items-center md:justify-center"
              >
                <FaWhatsappSquare
                  className="
                    text-4xl
                    transition-all duration-300 ease-in-out
                    group-hover:text-indigo-700
                    group-hover:scale-110
                    shadow-md custom-multi-shadow hover:shadow-lg
                    rounded-full p-2 bg-white
                  "
                />
                <p>+923194760659</p>
              </Link>
        </div>
      </form>

     <div className="flex flex-col items-center justify-center mt-4 -ml-2 gap-8">
       <div className="flex flex-col items-center justify-center  text-3xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">
        <div className="flex  items-center justify-between ">
          <div className="w-7 h-[1px] bg-gradient-to-r from-blue-dark to-indigo-700 mt-4 mr-1.5"></div>
          <p>Connect with Us</p>
        </div>
      </div>
      <div className="flex gap-4  text-3xl sm:text-4xl text-center w-full  justify-center  pl-7 text-gray-700 ">
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
                    transition-all duration-300
                    text-indigo-700 ease-in-out
                    group-hover:text-indigo-700
                    group-hover:scale-110
                    shadow-md custom-multi-shadow hover:shadow-lg
                    rounded-full p-2 bg-white
                  "
                />
              </Link>
               ))}
      </div>
     </div>

     <WhatsAppCommunitySection />
    </section>
  );
};

export default ContactUs;
