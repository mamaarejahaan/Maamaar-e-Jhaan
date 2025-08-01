

// // const team = [
// //   {
// //     title: "President",
// //     name: "Maaz Javaid",
// //     description: `Study resources, tutoring, workshops
// // Career counseling & field guidance
// // Admission & scholarship guidance`
// //   },
// //   {
// //     title: "Education & Academics",
// //     name: "Anees Ahmad",
// //     description: `Study resources, tutoring, workshops
// // Career counseling & field guidance
// // Admission & scholarship guidance`,
// //   },
// //   {
// //     title: "Student Affairs",
// //     name: "Irfan Habib",
// //     description: `Handles student issues, complaints, support
// // Hostel and personal problems`,
// //   },
// //   {
// //     title: "Administration",
// //     name: "Nouraiz & Abdul Rafay",
// //      description: `Skill development, workshops
// // Public speaking, project handling`,
// //   },
// //   {
// //     title: "Religious & Ethical Development",
// //     name: "Abubakar Bajwa",
// //     description: `Deen-Duniya balance, Islamic sessions, tarbiyah`,
// //   },
// //   {
// //     title: "Media & Communications",
// //     name: "Hadeed Ahmad",
// //     description: `Manages social media, content, design
// // Website & newsletter handling`,
// //   },
// //   {
// //     title: "Events & Outreach",
// //     name: "Sikandar",
// //     description: `Organizing seminars, competitions, public events
// // Managing collaborations with other bodies`,
// //   },
// //   {
// //     title: "Leadership & Training",
// //     name: "Br. Sher Ali",
// //     description: `Skill development, workshops
// // Public speaking, project handling`,
// //   },
// //   {
// //     title: "Finance",
// //     name: "Faizan Rauf",
// //     description: `Budgeting, funding, logistics`,
// //   },
// // ];

// // const AboutUs = () => {
// //   return (
// //     <div className="py-20 px-8 md:px-32 space-y-16">
// //       {/* About Section */}
// //       <div className="text-center">
// //         <h2 className="text-3xl font-bold text-blue-dark mb-4">About Us</h2>
// //         <p className="md:text-lg text-gray-700">
// //           <strong className="text-xl text-blue-dark italic">Mamar-e-Jahan</strong> is more than a society — it's a movement of passionate medicos from Sargodha Medical College, rooted in Iqbal’s dream and the spirit of Shaheen. We work to uplift students spiritually, mentally, and professionally — guiding them toward balanced lives of purpose, resilience, and leadership, all under the light of divine values.
// //         </p>
// //       </div>

// //       {/* Team Section */}
// //       <div className="text-center">
// //         <h2 className="text-2xl font-bold text-blue-dark mb-10">Our Team</h2>
// //         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
// //           {team.map((member, index) => (
// //             <div key={index} className="border p-6 rounded-lg shadow-md bg-white">
// //               <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
// //                 {/* Placeholder Image or Initials */}
// //                 {member.name.split(" ")[0][0]}
// //               </div>
// //               <h3 className="text-xl font-semibold text-blue-dark mb-1">{member.title}</h3>
// //               <p className="text-blue-800 font-medium mb-2">{member.name}</p>
// //               {member.description && (
// //                 <p className="text-gray-700 whitespace-pre-line text-sm">
// //                   {member.description}
// //                 </p>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AboutUs;


// const goals = [
//   {
//     title: "Faith-Centered Growth",
//     description: "Helping students become better Muslims by balancing Deen and Duniya.",
//   },
//   {
//     title: "Student Advocacy",
//     description: "Addressing academic, social, and systemic challenges faced by students.",
//   },
//   {
//     title: "Mental Health & Emotional Support",
//     description: "Creating a safe space for emotional well-being, healing, and resilience.",
//   },
//   {
//     title: "Academic & Educational Guidance",
//     description: "Offering resources, mentorship, and academic support for better learning.",
//   },
//   {
//     title: "Positive Learning Environment",
//     description: "Fostering a nurturing and growth-oriented atmosphere for personal development.",
//   },
//   {
//     title: "Professional Exposure",
//     description: "Bridging classroom learning with real-world experiences and career insight.",
//   },
//   {
//     title: "Leadership & Co-curricular Engagement",
//     description: "Cultivating leadership, confidence, and teamwork through diverse activities.",
//   },
// ];

// const team = [
//   {
//     title: "President",
//     name: "Maaz Javaid",
//     description: `Study resources, tutoring, workshops
// Career counseling & field guidance
// Admission & scholarship guidance`,
//   },
//   {
//     title: "Education & Academics",
//     name: "Anees Ahmad",
//     description: `Study resources, tutoring, workshops
// Career counseling & field guidance
// Admission & scholarship guidance`,
//   },
//   {
//     title: "Student Affairs",
//     name: "Irfan Habib",
//     description: `Handles student issues, complaints, support
// Hostel and personal problems`,
//   },
//   {
//     title: "Administration",
//     name: "Nouraiz & Abdul Rafay",
//     description: `Skill development, workshops
// Public speaking, project handling`,
//   },
//   {
//     title: "Religious & Ethical Development",
//     name: "Abubakar Bajwa",
//     description: `Deen-Duniya balance, Islamic sessions, tarbiyah`,
//   },
//   {
//     title: "Media & Communications",
//     name: "Hadeed Ahmad",
//     description: `Manages social media, content, design
// Website & newsletter handling`,
//   },
//   {
//     title: "Events & Outreach",
//     name: "Sikandar",
//     description: `Organizing seminars, competitions, public events
// Managing collaborations with other bodies`,
//   },
//   {
//     title: "Leadership & Training",
//     name: "Br. Sher Ali",
//     description: `Skill development, workshops
// Public speaking, project handling`,
//   },
//   {
//     title: "Finance",
//     name: "Faizan Rauf",
//     description: `Budgeting, funding, logistics`,
//   },
// ];

// const AboutUs = () => {
//   return (
//     <section id="about" className="py-20 px-8 md:px-32 space-y-16">
//       {/* About Section */}
//       <div className="text-center">
//         <h2 className="text-3xl font-bold text-blue-dark mb-4">About Us</h2>
//         <p className="md:text-lg text-gray-700">
//           <strong className="text-xl text-blue-dark italic">Mamar-e-Jahan</strong> is more than a society — it's a movement of passionate medicos from Sargodha Medical College, rooted in Iqbal’s dream and the spirit of Shaheen. We work to uplift students spiritually, mentally, and professionally — guiding them toward balanced lives of purpose, resilience, and leadership, all under the light of divine values.
//         </p>
//       </div>

//       {/* Goals Section */}
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-blue-dark mb-10">Our Goals ✨</h2>
//         {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
//           {goals.map((goal, index) => (
//             <div key={index} className="border  p-5 rounded-lg bg-white shadow-sm  hover:shadow-blue-dark hover:shadow-md transition">
//               <h3 className="text-lg font-semibold text-blue-dark mb-2">{index + 1}. {goal.title}</h3>
//               <p className="text-gray-700 text-sm">{goal.description}</p>
//             </div>
//           ))}
//         </div> */}
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
//   {goals.map((goal, index) => (
//     <div
//       key={index}
//       className="relative cursor-default group overflow-hidden hover:border-none group-hover:shadown-none border p-5 rounded-lg bg-white shadow-md shadow-blue-dark hover:shadow-none transition"
//     >
//       {/* Sliding Overlay */}
//       <div className="absolute inset-0 bg-blue-dark translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>

//       {/* Content (on top) */}
//       <div className="relative z-20">
//         <h3 className="text-lg font-semibold text-blue-dark mb-2
//         group-hover:text-white">
//           {index + 1}. {goal.title}
//         </h3>
//         <p className="text-gray-700 text-sm
//         group-hover:text-white">{goal.description}</p>
//       </div>
//     </div>
//   ))}
// </div>

//       </div>

//       {/* Team Section */}
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-blue-dark mb-10">Our Team</h2>
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//   {team.map((member, index) => (
//     <div
//       key={index}
//       className="relative cursor-default group p-6 rounded-lg shadow-md shadow-blue-dark hover:shadow-none bg-white overflow-hidden border"
//     >
//       {/* Sliding Overlay */}
//       <div className="absolute inset-0 bg-blue-dark -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>

//       {/* Content (on top) */}
//       <div className="relative z-20">
//         <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
//           {member.name.split(" ")[0][0]}
//         </div>
//         <h3 className="text-xl font-semibold text-blue-dark group-hover:text-white mb-1">
//           {member.title}
//         </h3>
//         <p className="text-blue-800 font-medium  mb-2 group-hover:text-gray-300">
//           {member.name}
//         </p>
//         {member.description && (
//           <p className="text-gray-700 whitespace-pre-line text-sm group-hover:text-white">
//             {member.description}
//           </p>
//         )}
//       </div>
//     </div>
//   ))}
// </div>

//       </div>
//     </section>
//   );
// };

// export default AboutUs;





const goals = [
  {
    title: "Faith-Centered Growth",
    description: "Helping students become better Muslims by balancing Deen and Duniya.",
  },
  {
    title: "Student Advocacy",
    description: "Addressing academic, social, and systemic challenges faced by students.",
  },
  {
    title: "Mental Health & Emotional Support",
    description: "Creating a safe space for emotional well-being, healing, and resilience.",
  },
  {
    title: "Academic & Educational Guidance",
    description: "Offering resources, mentorship, and academic support for better learning.",
  },
  {
    title: "Positive Learning Environment",
    description: "Fostering a nurturing and growth-oriented atmosphere for personal development.",
  },
  {
    title: "Professional Exposure",
    description: "Bridging classroom learning with real-world experiences and career insight.",
  },
  {
    title: "Leadership & Co-curricular Engagement",
    description: "Cultivating leadership, confidence, and teamwork through diverse activities.",
  },
];

const team = [
  {
    title: "President",
    name: "Maaz Javaid",
    description: `Study resources, tutoring, workshops\nCareer counseling & field guidance\nAdmission & scholarship guidance`,
  },
  {
    title: "Education & Academics",
    name: "Anees Ahmad",
    description: `Study resources, tutoring, workshops\nCareer counseling & field guidance\nAdmission & scholarship guidance`,
  },
  {
    title: "Student Affairs",
    name: "Irfan Habib",
    description: `Handles student issues, complaints, support\nHostel and personal problems`,
  },
  {
    title: "Administration",
    name: "Nouraiz & Abdul Rafay",
    description: `Skill development, workshops\nPublic speaking, project handling`,
  },
  {
    title: "Religious & Ethical Development",
    name: "Abubakar Bajwa",
    description: `Deen-Duniya balance, Islamic sessions, tarbiyah`,
  },
  {
    title: "Media & Communications",
    name: "Hadeed Ahmad",
    description: `Manages social media, content, design\nWebsite & newsletter handling`,
  },
  {
    title: "Events & Outreach",
    name: "Sikandar",
    description: `Organizing seminars, competitions, public events\nManaging collaborations with other bodies`,
  },
  {
    title: "Leadership & Training",
    name: "Br. Sher Ali",
    description: `Skill development, workshops\nPublic speaking, project handling`,
  },
  {
    title: "Finance",
    name: "Faizan Rauf",
    description: `Budgeting, funding, logistics`,
  },
];

const AboutUs = () => {

  return (
    <section id="about" className="py-20 px-8 md:px-32 space-y-16 bg-gray-50">
      {/* About Section */}
      <div className="text-center">
        <h2  data-aos="fade-down" className="text-4xl font-bold text-blue-dark mb-4">About Us</h2>
        <p className="md:text-lg text-gray-700"
         data-aos="fade-right">
          <strong className="text-xl text-blue-dark italic">Mamar-e-Jahan</strong> is more than a society — it's a movement of passionate medicos from Sargodha Medical College, rooted in Iqbal’s dream and the spirit of Shaheen. We work to uplift students spiritually, mentally, and professionally — guiding them toward balanced lives of purpose, resilience, and leadership, all under the light of divine values.
        </p>
      </div>

      {/* Goals Section */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-blue-dark mb-10">Our Goals</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-left">
          {goals.map((goal, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="relative cursor-default group overflow-hidden hover:border-none border p-5 rounded-lg bg-white shadow-md shadow-blue-dark hover:shadow-none transition"
            >
              <div className="absolute inset-0 bg-blue-dark translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
              <div className="relative z-20">
                <h3 className="text-lg font-semibold text-blue-dark mb-2 group-hover:text-white">
                  {index + 1}. {goal.title}
                </h3>
                <p className="text-gray-700 text-sm group-hover:text-white">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-blue-dark mb-10">Our Team</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 80}
              className="relative cursor-default group p-6 rounded-lg shadow-md shadow-blue-dark hover:shadow-none bg-white overflow-hidden border"
            >
              <div className="absolute inset-0 bg-blue-dark -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
              <div className="relative z-20">
                <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
                  {member.name.split(" ")[0][0]}
                </div>
                <h3 className="text-xl font-semibold text-blue-dark group-hover:text-white mb-1">
                  {member.title}
                </h3>
                <p className="text-blue-800 font-medium mb-2 group-hover:text-gray-300">
                  {member.name}
                </p>
                {member.description && (
                  <p className="text-gray-700 whitespace-pre-line text-sm group-hover:text-white">
                    {member.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
