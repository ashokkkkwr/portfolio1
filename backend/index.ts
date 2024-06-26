import express from 'express';
import mongoose from 'mongoose'
const app=express();
const port=4000

mongoose.connect('mongodb://localhost:27017/ashok')
    .then(()=>{
        app.listen(port,()=>{
            console.log(`listening to the port${port}`)
        })
    }).catch(error =>{
        console.error("error",error)
    })