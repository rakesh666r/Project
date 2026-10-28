import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import MainRouter from "./routes/index.js";

dotenv.config();

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello from backend.");
});

app.use('/api', MainRouter)

mongoose.connect(process.env.MONGODBURL).then(() => {
  console.log("database connected");
});

app.listen(8000, () => console.log("server is running on the port 8000"));
