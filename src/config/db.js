//https://www.npmjs.com/package/mongoose
//https://mongoosejs.com/docs/
import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    //use .connect method to connet with Database
    //mongodb://localhost:27017/todos means
    //--host: localhost
    //https://mongoosejs.com/docs/
    //--port: 27017
    //--databasename: todos
    await mongoose.connect("mongodb://localhost:27017/todos");
    console.log("Datasbe is connected Successfully");
  } catch (e) {
    console.error(e);
    //Break the execution if there any error
    process.exit(1);
  }
};
