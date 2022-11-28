import express from 'express';
//using cloud function (server to host api)
import functions from 'firebase-functions'

import cors from 'cors';

const app = express();
app.use(express.json())
app.use(cors());

app.get('/test', (req,res) => {
    res.send("hello")
})

export const api = functions.https.onRequest(app);