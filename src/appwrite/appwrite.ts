import { Client, Account, Databases, Storage,ID } from 'appwrite';
import conf from './conf';

const client = new Client();

client
  .setEndpoint(conf.appwriteEndPoint)
  .setProject(conf.appwriteProjectId); 

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export { client, account, databases, storage,ID };
