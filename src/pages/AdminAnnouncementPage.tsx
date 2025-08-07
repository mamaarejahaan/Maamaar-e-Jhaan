import  { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { databases, storage } from "@/appwrite/appwrite";
import conf from "@/appwrite/conf";
import CustomLoader, { CustomPageLoader } from "@/components/loader";
import {  useNavigate } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import Navbar from "@/components/Navbar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import CreateAnnouncementForm from "@/components/CreateAnnouncementForm";
import { Query } from "appwrite";



const AdminAnnouncementPage = () => {
  const [announcements, setAnnouncements] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  const [announcementId,setAnnouncementId]=useState("")
  const [imageFileId,setImageFileId]=useState("")
  const [isDeleting,setIsDeleting]=useState(false)
  const [isOpen,setIsOpen]=useState(false)
  const [isAnnouncementOpen,setIsAnnouncementOpen]=useState(false)
  const navigate=useNavigate()

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
  useEffect(() => {
   window.scrollTo(0,0)
   fetchAnnouncements()
  }, []);
  

  const DeleteAnnouncedment=async()=>{
    if(!imageFileId || !announcementId){
        toast.error("Please refresh the page and Try again!")
          setImageFileId("")
    setAnnouncementId("")
    setIsOpen(false)
        return
    }
  try {
    setIsDeleting(true)
    await storage.deleteFile(conf.appwriteBucketId,imageFileId || "" )
    await databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteAnnouncementCollectionId,
        announcementId
    )
     setAnnouncements((prev: any[]) => prev.filter(item => item.$id !== announcementId));
    setImageFileId("")
    setAnnouncementId("")
    setIsOpen(false)
    toast.success("Announcement deleted successfully!")

  } catch (error:any) {
    console.log("error in deleting announcement",error)
    toast.error(error.message || "Failed to delete announcement")
  }
  finally{
    setIsDeleting(false)
  }
  }
  if(loading) return <CustomPageLoader />
  return (
    <div className="bg-gray-200 min-h-screen py-20 pb-16 md:py-24 px-4 md:px-10">
        <Navbar />
        <div className="flex justify-between  gap-5 items-center">
    <button
            onClick={() => navigate(-1)}
            className="text-sm bg-gradient-to-r   from-blue-dark to-indigo-700 text-transparent bg-clip-text cursor-pointer flex gap-1 items-center justify-center"
          >
            <span className="text-2xl -mt-0.5">←</span> Back
          </button>
           <Button
          size="sm"
            onClick={() => {
              setIsOpen(false)
              setIsAnnouncementOpen(true)
            }}
             className="bg-gradient-to-r from-blue-dark  to-indigo-700 hover:bg-blue-dark cursor-pointer"
            
          >
            Create Announcement
          </Button>
          </div>
          <div className="text-center md:mb-6 mt-6">
      <h1 className="text-3xl md:text-4xl mt-3 font-bold text-center  bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">
       Your Announcements
      </h1>
          <p className="text-gray-700 mt-1 text-base md:text-lg max-w-2xl mx-auto">
  Manage and review all your announcements. Ensure your audience always sees the most up-to-date and important information
</p>
</div>

      {announcements.length === 0 ? (
       <div className="text-center text-gray-700 mt-4">
          <p>No announcement created yet.</p>
                    <Button
                    onClick={() => {
              setIsOpen(false)
              setIsAnnouncementOpen(true)
            }}
                    variant="secondary"
                    size="sm" className="
                    border border-blue-dark bg-transparent hover:bg-transparent bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text hover:text-blue-dark cursor-pointer
                    mt-3">Create Now</Button>
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
        <h3 className="text-xl pl-0.5 font-semibold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">
          Announcement
        </h3>

        <ScrollArea className="max-h-48 pr-2 text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">
          {item.description}
        
        </ScrollArea>
      </CardContent>

      <CardFooter className="p-4 pt-0 mt-auto">
        <Button
          className="w-full bg-red-600 hover:bg-red-700 cursor-pointer"
          onClick={()=>{
            setImageFileId(item.imageFileId)
            setAnnouncementId(item.$id)
            setIsOpen(true)

          }}
        >
          Delete Announcement
        </Button>
      </CardFooter>
    </Card>
  ))}
</div>

      )}

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="leading-relaxed text-base">Are you absolutely sure you want to delete this announcement?</AlertDialogTitle>
          <AlertDialogDescription className="-mt-1 text-gray-700">
  This action is irreversible. Once deleted, the announcement cannot be recovered and will be permanently removed for all users. Please confirm if you wish to proceed.
</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-6">
          <AlertDialogCancel
          type="button"
          disabled={isDeleting}
          className="border border-blue-dark text-blue-dark hover:text-blue-dark cursor-pointer"
          onClick={()=>{
            setImageFileId("")
            setAnnouncementId("")
            setIsOpen(false)
          }}
          >Cancel</AlertDialogCancel>
          <AlertDialogAction
          type="button"
          disabled={isDeleting}
          onClick={()=>DeleteAnnouncedment()}
          className="bg-red-600 hover:bg-red-700 md:w-24 cursor-pointer"
          >
            {isDeleting?<CustomLoader />:"Delete"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

     <Dialog open={isAnnouncementOpen} onOpenChange={setIsAnnouncementOpen}>
        <DialogContent>
           <ScrollArea className="h-[70vh] w-full pr-2">
          <CreateAnnouncementForm setIsAnnouncementOpen={setIsAnnouncementOpen}
          fetchAnnouncements={fetchAnnouncements} />
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminAnnouncementPage;