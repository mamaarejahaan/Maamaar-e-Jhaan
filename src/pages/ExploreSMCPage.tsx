
import 'swiper/swiper-bundle.css';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ExploreSMCPage = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

   const SMC= [
    { name: "Explore SMC", images: ["/SMC1.jpg", "/SMC2.jpg", "/SMC3.jpg", "/SMC4.jpg","/SMC5.jpg", "/SMC6.jpg", "/SMC7.jpg", "/SMC8.jpg", "/SMC9.jpg","/SMC10.jpg", "/SMC11.jpg", "/SMC12.jpeg", "/SMC13.jpeg","/SMC14.jpeg",
      "/SMC15.jpeg","/SMC16.jpeg", "/SMC17.jpeg", "/SMC18.jpeg", "/SMC19.jpeg", "/SMC20.jpeg","/SMC21.jpeg", "/SMC22.jpeg", "/SMC23.jpeg", "/SMC24.jpeg"
    ] },
  ];


  return (
    <div className='bg-gray-200 min-h-screen py-20 pb-8  md:pb-0 md:pt-24  px-4 md:px-10'>
      <Navbar />

      <button
        onClick={() => navigate(-1)}
        className="text-sm bg-gradient-to-r px-1 md:px-5 from-blue-dark to-indigo-700 text-transparent bg-clip-text cursor-pointer flex gap-1 items-center justify-center mb-6"
      >
        <span className="text-2xl -mt-0.5">←</span> Back
      </button>

      {/* Page Heading */}
      {/* <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-3">
          Events & Activities
        </h1>
        <p className="text-gray-700 -mt-2 text-base md:text-lg max-w-2xl mx-auto">
          Explore our vibrant journey through academic, cultural and community-building events.
        </p>
      </div> */}
   
    {SMC.map((smc, idx) => (
        <div key={idx} className="mb-20 mt-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
            {smc.name}
          </h2>
        <div className='grid grid-cols-1 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
            smc.images.map((img,index)=>(
            <img src={img} key={index} className='w-90 h-90 object-cover object-center' />
            ))
        }
        </div>
        </div>
    ))}
      
    </div>
  );
};

export default ExploreSMCPage;
