import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Play } from "lucide-react";

const yearLinks = [
  {
    year: "Medical book bank",
    img: "/notes1.jpeg",
    link: "https://drive.google.com/drive/folders/1rQ7l6cOHlB244_fKFdEqSP0CS0tkk24t",
  },
  {
    year: "1st Year Notes",
    img: "/notes2.jpeg",
    link: "https://drive.google.com/drive/folders/1My5EY4ery1AeM1ROKceq2XezlRv6E1cU",
  },
  {
    year: "2nd Year Notes",
    img: "/notes3.jpeg",
    link: "https://drive.google.com/drive/folders/1Wm94RazJKJHUTCKzZ8mesNUF_5WzOkmv",
  },
  {
    year: "3rd Year Notes",
    img: "/notes4.jpeg",
    link: "https://drive.google.com/drive/folders/1C_FU8ABVnaHY4xXdBVNDinicv-UVY1o1",
  },
  {
    year: "4th Year Notes",
    img: "/notes5.jpeg",
    link: "https://drive.google.com/drive/folders/1AJTxj9LJLExBwQ-3aopPMrlt8eWKTWJ4",
  },
];

const Resources = () => {


  return (
    <div id="resources" className="py-20 px-8 md:px-20 space-y-16 bg-gray-50">
      {/* Header */}
      <div className="text-center space-y-3" data-aos="fade-up">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">Academic Resources</h2>
        <p className="text-gray-700 text-lg">Find your academic notes and playlists, organized year-wise.</p>
      </div>

      {/* Cards Section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        {yearLinks.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col overflow-hidden"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={item.img}
              alt={`${item.year}`}
              className="w-full h-44 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="bg-gradient-to-r  from-blue-dark to-indigo-700 text-transparent bg-clip-text font-semibold text-sm mb-3">{item.year}</h3>
              <Link to={item.link} target="_blank" rel="noopener noreferrer">
                <Button
                  className="bg-transparent cursor-pointer hover:bg-indigo-700 hover:text-white text-blue-dark border border-blue-dark hover:border-none transition duration-300 w-full"
                >
                  View Notes <span className="text-xl">→</span>
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Playlist CTA */}
        <div
        className="bg-gradient-to-r from-blue-dark to-indigo-700 p-8 rounded-2xl shadow-lg max-w-4xl mx-auto text-center relative overflow-hidden"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-white/10 rounded-full" />
        
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center bg-white/20 p-3 rounded-full mb-4">
            <Play className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Enhance Your Learning Experience</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Complement your studies with our curated video lectures and tutorials covering all major subjects.
          </p>
          <Link
            to="https://youtube.com/@mamaarejahaan?si=xpmgkB1m9og7u84Z"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Button className="hover:scale-105 cursor-pointer transition-transform bg-white text-blue-600 hover:bg-white/90 shadow-md font-medium flex gap-2 items-center px-6 py-5">
              <Play className="w-5 h-5" />
              Watch Youtube Channel
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resources;
