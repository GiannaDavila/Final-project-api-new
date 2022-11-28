import express from 'express';
//using cloud function (server to host api)
import functions from 'firebase-functions'

import cors from 'cors';

import { addNewFood, getAllFood, updateFood, getOneFood, deleteFood } from 

const app = express();
app.use(cors());
app.use(express.json())

app.get('/food', getAllFood);
app.post('/food', addNewFood);
app.patch('/food/:foodId', updateFood);
app.get('/food/:foodId', getOneFood);
app.delete('/food/:food', deleteFood);

app.get('/', (req,res) => {
    res.send("hello")
})

const PORT = 3030;

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`) );
// redirects the traffic the cloud function 
export const api = functions.https.onRequest(app);