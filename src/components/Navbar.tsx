import {  useState } from "react";
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
import { useAuthStore } from "@/zustand/authStore";


const Events=["Students Welcome","Welcome Dinner","MUN (Model United Nation)","Palestine walk","Grand iftar","Med doc","Andaz e byan","Story night",
  "Palestine conference","Seminars","Class to Class compaign"
]
const Activities=["Cabinet meeting","Members meeting","Dars e Quran","Study circle","Eid drive","Teachers day",
  "Videography & painting competition","Shab e darri","Sports","Study Aid project","Alkhidmat plantation drives",
  "Pathway to diagnosis","Lab and physio day","Medtalks podcast","Pool party","Pima convention"
]
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location=useLocation()
 const [isOpen,setIsOpen]=useState(false)
 const {showJoinUs}=useAuthStore()
    
 const [isJoinFormOpen,setIsJoinFormOpen]=useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 w-screen bg-white shadow-md px-4 md:px-16 py-2 md:py-4 z-50">
      <div className="flex justify-between gap-5 items-center">
        <Link to="/" className="bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text text-3xl font-bold flex items-center space-x-2">
          <img src="Logo.png" alt="Logo" className="h-10 w-10" />
        </Link>
         {
      (location.pathname==="/admin" ||  location.pathname==="/admin-announcement") && (
       <nav
        className="flex space-x-5 text-sm  xl:space-x-10 bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text font-medium">
        <Link to="/admin"
        >Admin</Link>
        <Link to="/admin-announcement"
        >See your announcements</Link>

       </nav>
      )
    }

       {
        (location.pathname!=="/admin" && location.pathname!=="/announcement" && location.pathname!=="/admin-announcement" && location.pathname!=="/events-and-activities"
          && location.pathname!=="/admin-announcement" && location.pathname!=="/explore-smc"
        ) && (
         <>
          {/* Desktop Menu */}
       <nav className="hidden lg:flex">
  <ul className="flex space-x-5 text-sm  xl:space-x-10 bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text font-medium">
    
    <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
    <li><a href="#about">About Us</a></li>
    <li><Link to="/announcement" onClick={() => setMenuOpen(false)}>Announcement</Link></li>
    <li><a href="#collaborator">Collaborator</a></li>

    <li className="relative group">
      <a href="#resources" className="bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Resources</a>
      <ul className="absolute text-gray-700 font-normal -left-10 mt-7 w-40 bg-white shadow-md rounded-lg p-2 space-y-2 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-300 z-50">
        <li><a href="https://drive.google.com/drive/folders/1rQ7l6cOHlB244_fKFdEqSP0CS0tkk24t" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">Medical books</a></li>
        <li><a href="https://drive.google.com/drive/folders/1My5EY4ery1AeM1ROKceq2XezlRv6E1cU" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">1st Year</a></li>
        <li><a href="https://drive.google.com/drive/folders/1Wm94RazJKJHUTCKzZ8mesNUF_5WzOkmv" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">2nd Year</a></li>
        <li><a href="https://drive.google.com/drive/folders/1C_FU8ABVnaHY4xXdBVNDinicv-UVY1o1" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">3rd Year</a></li>
        <li><a href="https://drive.google.com/drive/folders/1AJTxj9LJLExBwQ-3aopPMrlt8eWKTWJ4" target="_blank" rel="noopener noreferrer" className="block px-3 py-1 rounded hover:bg-gray-50 text-sm">4th Year</a></li>
      </ul>
    </li>

    <li className="relative group">
      <Link to="/events-and-activities" className="bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Events & Activities</Link>
      <div className="absolute text-blue-dark -left-100 mt-7 p-4 w-[700px] grid grid-cols-2 gap-6 bg-white shadow-md rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50">
        <ul className="flex flex-col gap-0">
          <strong className="mb-2 text-indigo-700">Mega Events</strong>
          {Events.map((event, index) => (
            <li className="font-normal  text-sm mb-1 text-gray-700" key={index}>{event}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-0">
          <strong className="mb-2 text-indigo-700">Our Activities</strong>
          {Activities.map((activity, index) => (
            <li className="font-normal text-sm mb-1 text-gray-700" key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </li>
    <li><Link to="/explore-smc" onClick={() => setMenuOpen(false)}>Explore SMC</Link></li>
    {
      showJoinUs &&  <li className="cursor-pointer list-none" onClick={() => setIsOpen(true)}>Join Us</li>
    }
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
  (location.pathname!=="/admin" && location.pathname!=="/announcement" && location.pathname!=="/announcement" && location.pathname!=="/admin-announcement" && location.pathname!=="/events-and-activities"
    && location.pathname!=="/explore-smc"
  ) && (
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
    <a
      href="#resources"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Resources
    </a>
    {/* <MdKeyboardArrowDown className="mt-1.5"/>
    </div> */}
    <Link
      to="/events-and-activities"
      className="border-b border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => setMenuOpen(false)}
    >
      Events & Activities
    </Link>
            <Link to="/explore-smc"
           className="border-b border-gray-200 pb-2 hover:text-blue-700"
        onClick={() => {
          setMenuOpen(false)
          setMenuOpen(false)
        }}>Explore SMC</Link>
  {
    showJoinUs && (
        <li
      className="border-b list-none cursor-pointer border-gray-200 pb-2 hover:text-blue-700"
      onClick={() => {
        setMenuOpen(false)
        setIsOpen(true)
      }}
    >
      Join Us
    </li>
    )
  }
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
          onClick={()=>setIsOpen(false)}
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
