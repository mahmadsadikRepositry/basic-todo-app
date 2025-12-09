//Create Server
import express from "express";

//CORS Middleware to allow cross origin Request
import cors from "cors";

// Create new express Application instance
const app = express();

//To allow cross communication
app.use(cors());

//Enable JSON
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is up on ${PORT}`);
});
