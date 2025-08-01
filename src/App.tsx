import { Route,  Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import {  Toaster } from "react-hot-toast"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
  AOS.init({
    duration: 800, // animation duration in ms
    easing: "ease-in-out",
    once: false,     // whether animation should happen only once
  });
}, []);

  return (
   
     <div>
      <Toaster position="bottom-right" /> 
       <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>
     </div>
   
  )
}

export default App
