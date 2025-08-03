import { useState } from "react";
import { Menu, X } from "lucide-react";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

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
             <li><a href="#collaborator">Collaborator</a></li>
            {/* <li><a href="#resources">Resources</a></li> */}
            <li className="relative group">
      <a href="#resources" className="hover:text-blue-700">Resources</a>
      {/* Dropdown */}
      <ul className="absolute left-0 mt-3 w-40 bg-white shadow-md rounded-lg p-2 space-y-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
        <li>
           <Link to="https://drive.google.com/drive/folders/1rQ7l6cOHlB244_fKFdEqSP0CS0tkk24t" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">
            Medical books
          </Link>
          <Link to="https://drive.google.com/drive/folders/1My5EY4ery1AeM1ROKceq2XezlRv6E1cU" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">
            1st Year
          </Link>
        </li>
        <li>
          <Link to="https://drive.google.com/drive/folders/1Wm94RazJKJHUTCKzZ8mesNUF_5WzOkmv" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">
            2nd Year
          </Link>
        </li>
        <li>
          <Link to="https://drive.google.com/drive/folders/1C_FU8ABVnaHY4xXdBVNDinicv-UVY1o1" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">
            3rd Year
          </Link>
        </li>
        <li>
          <Link to="https://drive.google.com/drive/folders/1AJTxj9LJLExBwQ-3aopPMrlt8eWKTWJ4" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">
            4th Year
          </Link>
        </li>
      </ul>
    </li>
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
  <div className="md:hidden absolute top-16 left-4 right-4 z-50 bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4 transition-all duration-300 text-blue-dark font-medium">
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
      href="#collaborator"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Collaborator
    </a>
    {/* <div className="flex gap-1 border-b border-gray-200 pb-2"> */}
    <a
      href="#resources"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Resources
    </a>
    {/* <MdKeyboardArrowDown className="mt-1.5"/>
    </div> */}
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
