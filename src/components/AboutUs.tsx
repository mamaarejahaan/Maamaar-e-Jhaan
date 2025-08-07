
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
    title: "Leadership & Training",
    name: "Br. Sher Ali",
    img:"/SherAli.JPG",
    description: `Skill development, workshops\nPublic speaking, project handling`,
  },
  {
    title: "Education & Academics",
    name: "Anees Ahmad",
    img:"/Anees.jpeg",
    description: `Study resources, tutoring, workshops\nCareer counseling & field guidance\nAdmission & scholarship guidance`,
  },
  {
    title: "Student Affairs",
    name: "Irfan Habib",
     img:"/Irfan.jpeg",
    description: `Handles student issues, complaints, support\nHostel and personal problems`,
  },
  {
    title: "Administration",
    name: "Nouraiz & Abdul Rafay",
    img:"/RafeyFeroz.jpeg",
    description: `Skill development, workshops\nPublic speaking, project handling`,
  },
  {
    title: "Religious & Ethical Development",
    name: "Abubakar Bajwa",
     img:"/AbuBakar.jpeg",
    description: `Deen-Duniya balance, Islamic sessions, tarbiyah`,
  },
  {
    title: "Media & Communications",
    name: "Hadeed Ahmad",
    img:"/Hadeed.jpeg",
    description: `Manages social media, content, design\nWebsite & newsletter handling`,
  },
  {
    title: "Events & Outreach",
    name: "Sikandar",
     img:"/Sikandar.jpeg",
    description: `Organizing seminars, competitions, public events\nManaging collaborations with other bodies`,
  },
  {
    title: "Finance",
    name: "Faizan Rauf",
    img:"/Faizan.jpeg",
    description: `Budgeting, funding, logistics`,
  },
  {
    title: "Female Wing",
    name: "Maamaar-e-Jhaan",
    img:"/Logo.png",
    // description: `Budgeting, funding, logistics`,
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 w-screen  overflow-x-hidden px-8 md:px-32 space-y-16">
      {/* About Section */}
      <div className="text-center">
        <h2  data-aos="fade-down" className="text-4xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-4">About Us</h2>
        <p className="md:text-lg text-gray-700"
         data-aos="fade-right">
          <strong className="text-xl bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text italic">Mamar-e-Jahan</strong> is more than a society — it's a movement of passionate medicos from Sargodha Medical College, rooted in Iqbal’s dream and the spirit of Shaheen. We work to uplift students spiritually, mentally, and professionally — guiding them toward balanced lives of purpose, resilience, and leadership, all under the light of divine values.
        </p>
      </div>

      {/* Goals Section */}
      <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-10">Our Goals</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 text-left">
          {goals.map((goal, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="relative cursor-default group overflow-hidden hover:border-none border px-4 py-5 rounded-lg bg-white shadow-md shadow-blue-dark hover:shadow-none transition"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-dark to-indigo-700  translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
              <div className="relative z-20">
                <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-2 group-hover:text-white">
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
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-10">Our Team</h2>

          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-6 items-center  ">
        <div className="cursor-default w-full md:w-1/2 px-4 py-6 order-2 md:order-1  rounded-lg shadow-md shadow-blue-dark  bg-white overflow-hidden border">
           <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text  mb-1">
                  Maaz Javaid
                </h3>
                <p className="text-indigo-700 font-medium mb-2 ">
                 — President, Mamar-e-Jahaan
                </p>
                <hr className="my-3 " />

                  <p className="text-gray-700 whitespace-pre-line text-sm ">
                   At Mamar-e-Jahaan, we believe true success lies in balancing Deen and Dunya. Our mission is to guide, support, and empower students — spiritually, emotionally, and academically. Through faith, mentorship, and purposeful engagement, we aim to nurture confident, compassionate, and visionary individuals. Let’s walk together on the path of excellence, for the sake of Allah and the betterment of our Ummah.
                  </p>

        </div>
          <div className="w-48 h-48  order-1 md:order-2 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
                  <img src="/President.jpeg" className="w-full h-full object-cover object-center rounded-full" />
                </div>
        </div>

        <div className="grid gap-5 md:gap-10 mt-9 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 80}
              className="relative cursor-default group px-4 py-6 rounded-lg shadow-md shadow-blue-dark hover:shadow-none bg-white overflow-hidden border"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-dark to-indigo-700  -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
              <div className="relative z-20">
                <div className="w-28 h-28 mx-auto bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
                 {
                  member?.img ?( <img src={member.img} className="w-full h-full object-contain object-center rounded-full" />):(
                   member.name[0].toUpperCase()
                  )
                 }
                
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text group-hover:text-white mb-1">
                  {member.title}
                </h3>
                <p className="text-indigo-700 font-medium mb-2 group-hover:text-gray-300">
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
