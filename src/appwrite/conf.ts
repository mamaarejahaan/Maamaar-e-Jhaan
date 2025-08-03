const conf={
     appwriteEndPoint:String(import.meta.env.VITE_APPWRITE_ENDPOINT),
 appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
 appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
 appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
 appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
 appwriteAnnouncementCollectionId:String(import.meta.env.VITE_APPWRITE_ANNOUNCEMENT_COLLECTION_ID)
}


export default conf