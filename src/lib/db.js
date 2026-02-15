import "server-only"
import { MongoClient,ServerApiVersion } from "mongodb"

if(!process.env.MONGODB_URI){
    throw new Error("MONGO URI NOT FOUND");
}

const client = new MongoClient(process.env.MONGODB_URI,{
    serverApi : {
        version : ServerApiVersion.v1,
        strict : true,
        deprecationErrors : true
    },
})

export async function getDB(dbName){
    try{
        await client.connect();
        console.log("Connected to MONGODB");
        return client.db(dbName);
    }
    catch(err){
        console.error(err);
    }
}

export async function getCollection(collectionName){
    const db = await getDB('tripcraft_db');
    if(db){
        return db.collection(collectionName);
    }
    return null;
}