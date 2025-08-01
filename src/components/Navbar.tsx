import { useState } from "react";
import { Menu, X } from "lucide-react"; // or any icon library you prefer

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md px-4 md:px-16 py-2 md:py-4 z-50">
      <div className="flex justify-between items-center">
        <a href="#hero" className="text-blue-dark text-3xl font-bold flex items-center space-x-2">
          <img src="Logo.png" alt="Logo" className="h-10 w-10" />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-8 text-blue-dark font-medium">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#contact">Join Us</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        {/* Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-dark ">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

   {menuOpen && (
  <div className="md:hidden absolute top-20 left-4 right-4 z-50 bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4 transition-all duration-300 text-blue-dark font-medium">
    <a
      href="#hero"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Home
    </a>
    <a
      href="#about"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      About Us
    </a>
    <a
      href="#resources"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Resources
    </a>
    <a
      href="#events"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Events
    </a>
    <a
      href="#contact"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Join Us
    </a>
    <a
      href="#contact"
      className="hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Contact Us
    </a>
  </div>
)}

    </div>
  );
};

export default Navbar;
