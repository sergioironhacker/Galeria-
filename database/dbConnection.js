import mongoose, { mongo } from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI , {
        dbName: "GALLERY"
    }).then (() => {
        console.log("Connected to database succefully");
    }).catch(err => {
        console.log("error connect to db");
    })
   
}