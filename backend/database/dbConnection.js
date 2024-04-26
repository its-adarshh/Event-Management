import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, { dbName: "Mern_Stack_Event" }).then(() => {
        console.log("connected to database");
    }).catch(err => {
        console.log("some erroe occured while connecting to database:", err);
    })
};