import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Navbar from '@/components/Navbar';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const EventsActivitiesPage = () => {
  const navigate = useNavigate();
  const [activeTab,setActiveTab]=useState(1)

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

   const Events = [
    { name: "Students Welcome", images: ["/StudentBatch1.jpeg", "/StudentBatch2.jpeg", "/StudentBatch3.jpeg", "/StudentBatch4.jpeg","/StudentBatch5.jpeg", "/StudentBatch6.jpeg", "/StudentBatch7.jpeg", "/StudentBatch8.jpeg"] },
    { name: "Welcome Dinner", images: ["/Dinner1.jpeg", "/Dinner2.jpeg", "/Dinner3.jpeg", "/Dinner4.jpeg"] },
    { name: "Story Night", images: ["/Storynight1.jpeg", "/Storynight2.jpeg","/Storynight3.jpeg","/Storynight4.jpeg"] },
    { name: "Andaz e Byan", images: ["/AndazeByan1.jpeg", "/AndazeByan2.jpeg", "/AndazeByan3.jpeg", "/AndazeByan4.jpeg","/AndazeByan5.jpeg"] },
    { name: "Grand Iftar", images: ["/Grandiftar1.jpeg", "/Grandiftar2.jpeg", "/Grandiftar3.jpeg", "/Grandiftar4.jpeg", "/Grandiftar5.jpeg","/Grandiftar6.jpeg","/Grandiftar7.jpeg","/Grandiftar8.jpeg"] },
    { name: "Med Doc", images: ["/MedDoc1.jpeg", "/MedDoc2.jpeg", "/MedDoc3.jpeg", "/MedDoc4.jpeg","/MedDoc5.jpeg", "/MedDoc6.jpeg", "/MedDoc7.jpeg", "/MedDoc8.jpeg","/MedDoc9.jpeg","/MedDoc9.jpeg"] },
    { name: "MUN (Model United Nation)", images: ["/MUN1.jpeg", "/MUN2.jpeg", "/MUN3.jpeg", "/MUN4.jpeg","/MUN5.jpeg","/MUN6.jpeg"] },
    { name: "Online Sessions and Seminars", images: ["/Seminar1.jpeg", "/Seminar2.jpeg", "/Seminar3.jpeg", "/Seminar4.jpeg","/Seminar5.jpeg", "/Seminar6.jpeg", "/Seminar7.jpeg"] },
    { name: "Class to Class Compaign", images: ["/C2C1.jpeg", "/C2C2.jpeg", "/C2C3.jpeg","/C2C4.jpeg", "/C2C5.jpeg", "/C2C6.jpeg","/C2C7.jpeg"] },
    { name: "Palestine Conference", images: ["/Palestine1.jpeg", "/Palestine2.jpeg"] },
    // { name: "Teachers Day", images: ["/TechersDay1.jpeg", "/TechersDay2.jpeg", "/TechersDay3.jpeg"] },
    // { name: "Study Circle", images: ["/StudyCircle1.jpeg", "/StudyCircle2.jpeg", "/StudyCircle3.jpeg"] }
  ];
  const Activities = [
    { name: "Sports", images: ["/Sports1.jpeg", "/Sports2.jpeg", "/Sports3.jpeg", "/Sports4.jpeg"] },
    { name: "Dar s Quran and Shab e darri", images: ["/DQ1.jpeg", "/DQ2.jpeg", "/DQ3.jpeg", "/DQ4.jpeg", "/DQ5.jpeg", "/DQ6.jpeg", "/DQ7.jpeg"] },
    { name: "Pathway to Diagnosis", images: ["/PD1.jpeg", "/PD2.jpeg","/PD3.jpeg"] },
    { name: "Study Center", images: ["/StudyCenter1.jpeg", "/StudyCenter2.jpeg", "/StudyCenter3.jpeg", "/StudyCenter4.jpeg"] },
    { name: "Study Aid Project", images: ["/StudyAidProject1.jpeg", "/StudyAidProject2.jpeg", "/StudyAidProject3.jpeg", "/StudyAidProject4.jpeg", "/StudyAidProject5.jpeg"] },
    { name: "Alkhidmat plantation drives", images: ["/Alkhidmat1.jpeg", "/Alkhidmat2.jpeg", "/Alkhidmat3.jpeg"] },
    { name: "PIMA convention", images: ["/PIMA1.jpeg", "/PIMA2.jpeg", "/PIMA3.jpeg"] },
    { name: "Teachers Day", images: ["/TechersDay1.jpeg", "/TechersDay2.jpeg", "/TechersDay3.jpeg"] },
    { name: "Study Circle", images: ["/StudyCircle1.jpeg", "/StudyCircle2.jpeg", "/StudyCircle3.jpeg"] },
    { name: "Painting & Videography Competition", images: ["/StudyCircle1.jpeg", "/StudyCircle2.jpeg", "/StudyCircle3.jpeg"] }
  ];

  return (
    <div className='bg-gray-200 min-h-screen py-20 md:py-24 px-4 md:px-10'>
      <Navbar />

      <button
        onClick={() => navigate(-1)}
        className="text-sm bg-gradient-to-r px-1 md:px-5 from-blue-dark to-indigo-700 text-transparent bg-clip-text cursor-pointer flex gap-1 items-center justify-center mb-6"
      >
        <span className="text-2xl -mt-0.5">←</span> Back
      </button>

      {/* Page Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-3">
          Events & Activities
        </h1>
        <p className="text-gray-700 -mt-2 text-base md:text-lg max-w-2xl mx-auto">
          Explore our vibrant journey through academic, cultural and community-building events.
        </p>
      </div>
    <div className='flex justify-between mt-14 px-2 d:px-0 md:justify-around gap-4'>
    <p className={`text-xl text-indigo-700 font-semibold cursor-pointer ${activeTab==1 && 'border border-b-blue-dark'}`}
    onClick={()=>setActiveTab(1)}
    >Events</p>
    <p className={`text-xl font-semibold text-indigo-700 cursor-pointer ${activeTab==2 && 'border border-b-blue-dark'}`}
    onClick={()=>setActiveTab(2)}>Activities</p>
    </div>
    {
      activeTab==2?(
        Activities.map((activity, idx) => (
        <div key={idx} className="mb-20 mt-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
            {activity.name}
          </h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
  //             autoplay={{
  //   delay: 3000, // 3 seconds delay between slides
  //   disableOnInteraction: false, // Keeps autoplay active even after user interaction
  // }}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="w-full text-center max-w-6xl mx-auto custom-swiper"
          >
            {activity.images.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={imgSrc}
                    alt={`${activity.name} ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))
      ):(
          Events.map((event, idx) => (
        <div key={idx} className="mb-20 mt-16">
          <h2 className="text-center text-2xl md:text-3xl font-bold text-indigo-700 mb-6">
            {event.name}
          </h2>

          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
  //             autoplay={{
  //   delay: 3000, // 3 seconds delay between slides
  //   disableOnInteraction: true, // Keeps autoplay inactive even after user interaction
  // }}
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              }
            }}
            className="w-full text-center max-w-6xl mx-auto custom-swiper"
          >
            {event.images.map((imgSrc, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={imgSrc}
                    alt={`${event.name} ${index + 1}`}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))
      )
    }
      
    </div>
  );
};

export default EventsActivitiesPage;
