import { useState } from "react";
import { Menu, X } from "lucide-react";
// import { MdKeyboardArrowDown } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
 import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import JoinUsForm from "./JoinUsForm";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location=useLocation()
 const [isOpen,setIsOpen]=useState(false)
 const [isJoinFormOpen,setIsJoinFormOpen]=useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md px-4 md:px-16 py-2 md:py-4 z-50">
      <div className="flex justify-between items-center">
        <Link to="/" className="bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text text-3xl font-bold flex items-center space-x-2">
          <img src="Logo.png" alt="Logo" className="h-10 w-10" />
        </Link>

       {
        (location.pathname!=="/admin" && location.pathname!=="/announcement") && (
         <>
          {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-8 bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text font-medium">
            <Link to="/"
            onClick={()=>window.scrollTo(0,0)}>Home</Link>
            <li><a href="#about">About Us</a></li>
             <Link
    to="/announcement"
      onClick={() => setMenuOpen(false)}
    >
      Announcement
    </Link>
             <li><a href="#collaborator">Collaborator</a></li>
            {/* <li><a href="#resources">Resources</a></li> */}
            <li className="relative group">
      <a href="#resources" className="bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Resources</a>
      {/* Dropdown */}
      <ul className="absolute text-blue-dark -left-10 mt-3 w-40 bg-white shadow-md rounded-lg p-2 space-y-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
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
            <li
            className="cursor-pointer list-none"
            onClick={()=>setIsOpen(true)}
            >Join Us</li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        {/* Hamburger Icon */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-blue-dark">
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
         </>
        )
       }
      </div>

 {
  (location.pathname!=="/admin" && location.pathname!=="/announcement") && (
    <>
      {menuOpen && (
  <div className="lg:hidden absolute top-16 md:top-20 left-4 right-4 z-50 bg-white rounded-lg shadow-lg p-6 flex flex-col space-y-4 transition-all duration-300 text-blue-dark font-medium">
    <Link
      to="/"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => {
        window.scrollTo(0,0)
        setMenuOpen(false)
      }}

    >
      Home
    </Link>
    <a
      href="#about"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      About Us
    </a>
    <Link
    to="/announcement"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Announcement
    </Link>
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
    <li
      className="border-b list-none cursor-pointer border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => {
        setMenuOpen(false)
        setIsOpen(true)
      }}
    >
      Join Us
    </li>
    <a
      href="#contact"
      className="hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Contact Us
    </a>
  </div>
)}
  
    </>
  )
 }



    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure you want to join us?</AlertDialogTitle>
           <AlertDialogDescription>
        By clicking "Continue", you agree to be a part of our mission and stay updated with upcoming events, activities, and valuable resources.
      </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel
          className="border border-blue-dark text-blue-dark hover:text-blue-dark cursor-pointer"
          >Cancel</AlertDialogCancel>
          <AlertDialogAction
          className="bg-gradient-to-r from-blue-dark to-indigo-700  hover:bg-blue-dark cursor-pointer"
          onClick={()=>{setIsOpen(false)
            setIsJoinFormOpen(true)}
          }
          >Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


  <Dialog open={isJoinFormOpen} onOpenChange={setIsJoinFormOpen}>
  <DialogContent className="max-h-[90vh] overflow-hidden">
    <DialogHeader>
      <DialogTitle className="text-center bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text text-xl">
        Fill the form below
      </DialogTitle>
    </DialogHeader>
    <Separator className="my-1" />

    {/* Scroll only this area */}
    <ScrollArea className="h-[70vh] w-full pr-2">
      <JoinUsForm setDialogOpen={setIsJoinFormOpen} />
    </ScrollArea>
  </DialogContent>
</Dialog>
  
    </div>
  );
};

export default Navbar;
