import conf from '../conf/conf'
import {Client , ID , Databases, Storage , Query} from "appwrite"

export class Service{
    client = new Client()
    databases
    bucket
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost ({title, slug, content, featuredImage, status, userId})
    {
        try {
            return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title, 
                content,
                featuredImage, 
                status, 
                userId
            }
        )
        }
        catch (error) {
            console.log("Appwrite seervice :: createPost :: error",error); 
        }
    }

    async updatePost (slug, {title, content, featuredImage, status})
    {
        try {
            return await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title, 
                content,
                featuredImage, 
                status
            }
        )
        }
        catch (error) {
            console.log("Appwrite seervice :: updatePost :: error",error); 
        }
    }

    async deletePost (slug)
    {
        try {
            await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
        )
        return true;
        }
        catch (error) {
            console.log("Appwrite seervice :: deletePost :: error",error);
            return false;
        }
    }

    async getPost (slug)
    {
        try {
            return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
        )
        }
        catch (error) {
            console.log("Appwrite seervice :: getPost :: error",error);
            return false;
        }
    }

    async getPosts (queries = [Query.equal("status","active")])
    {
        try {
            return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
        )
        }
        catch (error) {
            console.log("Appwrite seervice :: getPosts :: error",error);
            return false;
        }
    }

    // file upload service

    async uploadFile(file)
    {
        try {
            return await this.storage.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
        }
        catch (error) {
            console.log("Appwrite seervice :: uploadFile :: error",error);
            return false;
        }
    }

    async deleteFile(fileId)
    {
        try {
            await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
        return true
        }
        catch (error) {
            console.log("Appwrite seervice :: deleteFile :: error",error);
            return false;
        }
    }

    getFilePreview(fileId){
        try {
            return this.storage.getFilePreview(
                conf.appwriteBucketId, 
                fileId
            )
        } catch (error) {
            console.log("Appwrite seervice :: getFilePreview :: error",error);

            
        }

    }


}


const service = new Service()
export default service
