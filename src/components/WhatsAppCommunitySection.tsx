import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const WhatsAppCommunitySection = () => {
  return (
    <section
    className="w-full relative bg-gradient-to-r from-blue-dark to-indigo-700 py-12 rounded-lg px-4 md:px-8">
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full" />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white
        mb-2">
          Join Our WhatsApp Community
        </h2>
        <p className="text-gray-300 text-sm  mb-6">
          Get real-time updates, announcements, and be part of our growing community!
        </p>
        <Link
          to="https://chat.whatsapp.com/EwM6WwKSAj3DjhzL7sr3K9?mode=ac_t"
          target="_blank"
          rel="noopener noreferrer"
        >
            <Button className="bg-green-600 hover:bg-green-700 cursor-pointer">
          <FaWhatsapp className="text-2xl" />
          Join WhatsApp Group
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WhatsAppCommunitySection;
