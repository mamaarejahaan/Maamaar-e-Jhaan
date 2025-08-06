import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { databases } from "@/appwrite/appwrite"; 
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { CustomPageLoader } from "@/components/loader";
import { Query } from "appwrite";
import { MdBloodtype, MdEmail, MdOutlinePhone } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import ChangePasswordForm from "@/components/ChangePasswordForm";
import conf from "@/appwrite/conf";
import CreateAnnouncementForm from "@/components/CreateAnnouncementForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";


const AdminPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState<any>([]);
  const [isOpen,setIsOpen]=useState(false)
  const [selectedUser, setSelectedUser] = useState<any>(null);
const [showUserDialog, setShowUserDialog] = useState(false);
  const [isAnnouncementOpen,setIsAnnouncementOpen]=useState(false)
  const [loading, setLoading] = useState(true);
    const [showJoin, setShowJoin] = useState(false);
      const [joinLoading, setJoinLoading] = useState(false);

   useEffect(() => {
        const fetchShowJoin = async () => {
      try {
        const res = await databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteSettingCollectionId,
          conf.appwriteSettingDocumentId
        );
        setShowJoin(res.joinusVisibility);
      } catch (err) {
        console.error("Error fetching Join setting:", err);
      }
    };
    const fetchUsers = async () => {
      try {
        setLoading(true)
        const res = await databases.listDocuments(
          conf.appwriteDatabaseId, 
          conf.appwriteCollectionId, 
          [Query.orderDesc("$createdAt")]
        );
        setUsers(res.documents);
      } catch (err) {
        console.error("Error fetching users:", err);
      }
      finally{
        setLoading(false)
      }
    };
    fetchShowJoin()
    fetchUsers();
  }, []);

  const parseAnswers = (answers: string) => {
    try {
      return JSON.parse(answers);
    } catch {
      return [];
    }
  };

    const handleJoinToggle = async () => {
      const toastId=toast.loading("toggling...")
    try {
      setJoinLoading(true)
      const updated = await databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteSettingCollectionId,
        conf.appwriteSettingDocumentId,
        {
          joinusVisibility: !showJoin,
        }
      );
      setShowJoin(updated.joinusVisibility);
      toast.success("Toggled successfully",{id:toastId})
    } catch (err) {
      console.error("Error updating Join toggle:", err);
      toast.error("Failed to toggle",{id:toastId})
    } 
    finally{
      setJoinLoading(false)
    }
  };

  if(loading) return <CustomPageLoader />
  return (
    <div className="min-h-screen bg-gray-50 py-16 pb-16 md:py-20 px-4 md:px-10">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-start items-start  md:justify-between md:items-center my-4 md:my-6">
          <button
            onClick={() => navigate(-1)}
            className="text-sm bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text cursor-pointer flex gap-1 items-center justify-center"
          >
            <span className="text-2xl -mt-0.5">←</span> Back
          </button>
          <div className="flex flex-col mt-3 md:mt-0 md:flex-row w-full md:w-fit  gap-2 items-center">
            <Button
          size="sm"
            onClick={() => {
              setIsOpen(false)
              setIsAnnouncementOpen(true)
            }}
             className="bg-gradient-to-r from-blue-dark w-full md:w-fit to-indigo-700 hover:bg-blue-dark cursor-pointer"
            
          >
            Create Announcement
          </Button>
          <Button
          size="sm"
            onClick={() => {
              setIsAnnouncementOpen(false)
              setIsOpen(true)
            }}
             className="border border-blue-dark w-full md:w-fit cursor-pointer  bg-transparent hover:bg-gray-200  bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text hover:text-blue-dark"
            
          >
            Change Password
          </Button>
          </div>
                  <div className="flex items-center justify-end m space-x-2 mt-4 md:mt-0 w-full md:w-fit
                  ">
          <Label htmlFor="join-toggle" className="text-sm text-gray-700 Form">{
            showJoin?"Hide":"Show"} “Join Us Form”</Label>
          <Switch
            id="join-toggle"
            checked={showJoin}
            onCheckedChange={handleJoinToggle}
            disabled={joinLoading}
          />
        </div>
        </div>

        <h1 className="text-2xl md:text-3xl mt-10  md:mt-20 font-semibold text-center bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text mb-8">
          Admin Panel - All Requests ({users?.length})
        </h1>

        {users.length === 0 ? (
          <div className="text-center text-gray-700">
          <p>No user requested to join the organization..</p>
                    <Button
                    onClick={()=>navigate("/")}
                    variant="secondary"
                    size="sm" className="
                    border border-blue-dark bg-transparent hover:bg-transparent bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text hover:text-blue-dark cursor-pointer
                    mt-3">Go Back</Button>
                              </div>

        ) : (

      <div className="grid  grid-cols-1 lg:grid-cols-2 -mt-3 md:mt-0 gap-6">
  {users.map((user: any) => (
    <div 
      key={user.$id} 
      className="
        p-6 rounded-xl 
        relative 
        bg-white border border-gray-100 
        shadow-sm hover:shadow-md
        transition-all duration-300 ease-in-out
        hover:border-blue-100
        hover:-translate-y-1
      "
    >

      {/* User details grid */}
      <div className="grid  grid-cols-1 mb-14 md:grid-cols-2 gap-5 text-sm overflow-wrap break-words">
        {[
          { label: "Name", value: user.fullname, icon: <MdEmail /> },
          { label: "Email", value: user.email, icon: "✉️" },
          { label: "Phone", value: user.phone, icon: <MdOutlinePhone /> },
          { label: "Class", value: user.class, icon: "🎓" },
          { label: "Department", value: user.department, icon: <TiHome className="text-lg" /> },
          { label: "Blood Group", value: user.bloodGroup || "N/A", icon: <MdBloodtype className="text-lg" /> },
          { label: "Sargodha Address", value: user.sargodhaAddress, icon: "📍" },
          { label: "Permanent Address", value: user.permanentAddress, icon: <TiHome className="text-lg" /> },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
          
            <div>
              <p className="font-medium bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">{item.label}</p>
              <p className="text-gray-700  ">{item.value || "N/A"}</p>
            </div>
          </div>
        ))}
      </div>

   

       <Button
      size="sm"

      className="mt-4 bg-gradient-to-r cursor-pointer from-blue-dark to-indigo-700 hover:bg-blue-dark  absolute bottom-4  left-3 right-3 "
      onClick={() => {
        setSelectedUser(user);
        setShowUserDialog(true);
      }}
    >
      View Full Details
    </Button>
    </div>
  ))}
</div>
        )}
      </div>


       <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-h-[90vh] overflow-hidden">
          <ChangePasswordForm setIsOpen={setIsOpen} />
        </DialogContent>
      </Dialog>

       <Dialog open={isAnnouncementOpen} onOpenChange={setIsAnnouncementOpen}>
        <DialogContent>
           <ScrollArea className="h-[70vh] w-full pr-2">
          <CreateAnnouncementForm setIsAnnouncementOpen={setIsAnnouncementOpen} />
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <Dialog open={showUserDialog} onOpenChange={setShowUserDialog}>
  <DialogContent className="max-h-[90vh] overflow-hidden">
    {selectedUser && (
      <div className="text-sm space-y-4">
        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-dark to-indigo-700 text-transparent bg-clip-text">
          {selectedUser.fullname}
        </h2>
        {/* Answers */}
     <ScrollArea className="mt-4 h-[80vh] pr-2 pb-8 md:pb-6 pt-2 border-t border-gray-200">
  <h3 className="font-semibold text-indigo-700 mb-2">Answers</h3>
  <ul className="space-y-4">
    {parseAnswers(selectedUser.answersArray).slice(0, 4).map((item: any, index: number) => (
      <li key={index}>
        <p className="font-medium text-gray-800">{item.question}</p>
        <p className="text-gray-600">{item.answer}</p>
      </li>
    ))}

    {/* Last two questions - show answers as chips */}
    {parseAnswers(selectedUser.answersArray).slice(4).map((item: any, index: number) => (
      <li key={index + 3}>
        <p className="font-medium text-gray-800">{item.question}</p>
        {
          item.answer?( <div className="flex flex-wrap gap-2  mt-1">
          {item.answer.split(',').map((chip: string, chipIndex: number) => (
            <span
              key={chipIndex}
              className="bg-indigo-50 text-blue-dark text-sm font-normal  px-3 py-1 rounded-full"
            >
              {chip.trim()}
            </span>
          ))}
        </div>):(
            <p>User did not provide answer of this question</p>
          )
        }

      </li>
    ))}
  </ul>
</ScrollArea>


      </div>
    )}
  </DialogContent>
</Dialog>

    </div>
  );
};

export default AdminPage;

