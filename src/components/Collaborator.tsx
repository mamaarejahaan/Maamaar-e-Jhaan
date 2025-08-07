const collaborators = [
  {
    name: "Alkhidmat Health Foundation",
    img:"/collaborator3.jpeg",
  },
   {
    name: "PIMA",
    img:"/collaborator8.png",
  },
  {
    name: "Paragon Consultant",
    img:"/collaborator1.png",
  },
  
  {
    name: "Dental Solutions",
    img:"/collaborator6.jpeg",
  },
  {
    name: "Quran Club",
    img:"/collaborator7.jpeg",
  },
  {
    name: "Influencer of Sarogdha",
    img:"/collaborator9.jpeg",
  },
];
const Collaborator = () => {
  return (
    <div id="collaborator"  className="py-20 w-screen overflow-x-hidden  px-8 md:px-32 space-y-16">
     <div className="text-center" data-aos="fade-up">
        <h2 className="text-2xl font-bold text-blue-dark mb-10">Our Collaborator</h2>

        <div className="grid gap-5 md:gap-10 mt-9 md:grid-cols-2 lg:grid-cols-3">
          {collaborators.map((collab, index) => (
            <div
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 80}
              className="relative cursor-default group px-4 py-6 rounded-lg shadow-md shadow-blue-dark hover:shadow-none bg-white overflow-hidden border"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-dark to-indigo-700  -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-10"></div>
              <div className="relative z-20">
                <div className=" mx-auto   mb-4 flex items-center justify-center text-gray-500 text-xl font-semibold">
                <img src={collab.img} className="w-full h-full object-cover " />
                </div>
                <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text group-hover:text-white mb-1">
                  {collab.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collaborator