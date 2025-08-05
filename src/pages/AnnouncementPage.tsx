import  { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { databases } from "@/appwrite/appwrite";
import conf from "@/appwrite/conf";
import { CustomPageLoader } from "@/components/loader";
import { Link, useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import { Query } from "appwrite";
import toast from "react-hot-toast";



const AnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const navigate=useNavigate()
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const res = await databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteAnnouncementCollectionId,
           [Query.orderDesc('$createdAt')]
        );
        setAnnouncements(res.documents);
      } catch (error:any) {
         console.error("Failed to fetch announcements:", error);
        toast.error(error.message || "Failed to fetch announcemetns")
        navigate(-1)
      } finally {
        setLoading(false);
      }
    };

   window.scrollTo(0,0)
   fetchAnnouncements()
  }, []);

  if(loading) return <CustomPageLoader />
  return (
    <div className="bg-gray-200 min-h-screen py-20 pb-16 md:py-24 px-4 md:px-10">
        <Navbar />
    <button
            onClick={() => navigate(-1)}
            className="text-sm bg-gradient-to-r px-2 md:px-9  from-blue-dark to-indigo-700 text-transparent bg-clip-text cursor-pointer flex gap-1 items-center justify-center"
          >
            <span className="text-2xl -mt-0.5">←</span> Back
          </button>
          <div className="text-center md:mb-6 mt-6">
      <h1 className="text-3xl md:text-4xl mt-3 font-bold text-center  bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">
        Announcements
      </h1>
      <p className="text-gray-700 mt-1 text-base md:text-lg max-w-2xl mx-auto">
  Stay up to date with the latest announcements and important updates. Check back often to never miss any key events or messages from our team.
</p>
</div>

      {announcements.length === 0 ? (
       <div className="text-center text-gray-700 mt-4">
          <p>No announcement available.</p>
                    <Button
                    onClick={()=>navigate("/")}
                    variant="secondary"
                    size="sm" className="
                    border border-blue-dark bg-transparent hover:bg-transparent bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text hover:text-blue-dark cursor-pointer
                    mt-3">Go Back</Button>
                              </div>
      ) : (
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:px-8 py-8">
  {announcements.map((item: any) => (
    <Card
      key={item.$id}
      className="flex p-0 flex-col shadow-lg border border-gray-200 rounded-xl overflow-hidden transition-all hover:shadow-xl"
    >

        <img
          src={item.imageURL}
          alt="Announcement"
          className="w-full h-full max-h-90 object-cover"
        />


      <CardContent className="flex-1 flex flex-col justify-between px-4 py-5 space-y-1">
        <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">
          Announcement
        </h3>

        <ScrollArea className="max-h-48 pr-2 text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
          {item.description}
        
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          asChild
          className="w-full bg-gradient-to-r from-blue-dark to-indigo-600 hover:brightness-110 text-white rounded-md"
        >
          <Link
            to={item.googleFormURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Register via Google Form
          </Link>
        </Button>
      </CardFooter>
    </Card>
  ))}
</div>

      )}
    </div>
  );
};

export default AnnouncementPage;
