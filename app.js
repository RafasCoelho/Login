require('dotenv').config();;
const express = require('express');
const app = express();
const useRouter = require('./routes/userRouter')
const mongoose =require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect(process.env.MONGO_CONNECTION_URL, 
  
    (error) => {
        if(error)
           console.log(error)
           else
           console.log('Mongo connected')

    })


app.use('/user', express.json(), useRouter);

app.listen(process.env.PORT, () =>{console.log("Server Running ")})