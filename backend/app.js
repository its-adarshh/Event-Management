import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });
app.use(cors({
    origin: [process.env.FRONT_URL],
    methods: ["POST"],
    credentials:true,
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dbConnection();

app.get("/", (req, res) => {
    res.json({
      success: true,
      message: "HABIBI COME TO DUBAI",
    });
  });

app.use("/api/v1/message",messageRouter)

export default app;