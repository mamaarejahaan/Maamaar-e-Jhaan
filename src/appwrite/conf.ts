const conf={
     appwriteEndPoint:String(import.meta.env.VITE_APPWRITE_ENDPOINT),
 appwriteProjectId:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
 appwriteDatabaseId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
 appwriteCollectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
 appwriteBucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
 appwriteAnnouncementCollectionId:String(import.meta.env.VITE_APPWRITE_ANNOUNCEMENT_COLLECTION_ID),
 emailjsServiceId:String(import.meta.env.VITE_EMAIL_JS_SERVICE_ID),
 emailjsTemplateId:String(import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID),
 emailjsPublicKey:String(import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY),
 emailjsJoinusFormTemplatedId:String(import.meta.env.VITE_EMAIL_JS_JOINUS_FORM_TEMPLATE_ID),
 websiteURL:String(import.meta.env.VITE_WEBSITE_LINK)
}


export default conf