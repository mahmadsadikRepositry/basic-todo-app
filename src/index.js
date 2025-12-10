//Create Server
import express from "express";
//CORS Middleware to allow cross origin Request
import cors from "cors";
//Db config
import { connectDb } from "./config/db.js";
//API routes
import todoRouter from "./routes/todoRoutes.js";

// Create new express Application instance
const app = express();

//To allow cross communication
app.use(cors());

app.use("/api/todos", todoRouter);

//Enable JSON
app.use(express.json());

const PORT = 3000;

//Connect with Database
connectDb();

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
