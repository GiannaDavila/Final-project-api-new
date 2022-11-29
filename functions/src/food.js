import { dbConnect } from "./dbConnect.js";
import { ObjectId } from 'mongodb'


export async function addNewFood (req, res){
    const newFood = req.body
    const db = dbConnect()
    await db.collection('food').insertOne
    (newFood)
    .catch(err => {
        res.status(500).send(err)
        return
    })
    res.status(201).send({message: "New Food Added!"})
}

export async function getAllFood(req, res){
    const db = dbConnect()
    const collection = await
    db.collection('food').find().toArray()
    res.send(collection)
}
export async function updateFood(req,res){
    const { foodId } = req.params 
    const db = dbConnect()
    await db.collection('food')
    .findOneAndUpdate({ _id: new
    ObjectId(foodId) }, { $set: req.body })
    .catch(err => {
        res.status(500).send(err)
        return
    })
    res.status(202).send({ message: 'Food is Updated!'})
}

export async function getOneFood(req,res){
    const db = dbConnect()
    const { foodId } = req.params 
    const collection = await db.collection('food')
    .find({ _id: new ObjectId(foodId)}).toArray()
    res.send(collection)

}

export async function deleteFood (req,res){
    const db = dbConnect()
    const { foodId } = req.params
    await db.collection("food")
    .findOneAndDelete({ _id: new ObjectId(foodId) })
    res.status(203).send('Food Deleted')
}