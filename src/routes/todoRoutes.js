import express from "express";

import Todo from "../models/todo.js";

//Create new Instance of Exprees.Router to define our API Routes
const todoRouter = express.Router();

//Create A new Task
todoRouter.post("/", async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo); // 201 created
  } catch (error) {
    res.status(400).json({ erro: error });
  }
});

export default todoRouter;
