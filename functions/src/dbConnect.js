//import MongoClient and ServerApiVersion from mongo
//import MongoClient- Nodejs library that handles connecting to and interacting with MongoDB database
import { MongoClient, ServerApiVersion } from 'mongodb';

import 'dotenv/config'

//create new MongoClient instance and export it 
export function dbConnect(){
    const client = new MongoClient(process.env.MONGO_URL);
    return client.db("FinalProject");
}