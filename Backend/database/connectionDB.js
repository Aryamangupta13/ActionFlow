import mongoose from "mongoose";

const connectionDB=()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("connection okk Mongo")
    }).catch((e)=>{
        console.log("error on mongo connection")
    })
}

export default connectionDB;