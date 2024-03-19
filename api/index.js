import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => {
      console.log("Connected to MongoDB!");
   })
   .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
   });


const app = express();

app.listen(5173, ()=>{
    console.log('Server is running on port')
});
