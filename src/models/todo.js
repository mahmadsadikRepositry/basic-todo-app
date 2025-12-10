import mongoose from "mongoose";

//https://mongoosejs.com/docs/8.x/docs/api/schema.html#Schema()
const todoSchema = mongoose.Schema({
  //field name
  title: { type: String, require: true },
  //field name
  completion: { type: Boolean, default: false },
});

//Export your mongo model name "Todo" based on todoSchema
// This allow us to communicate with todos collection on MongoDb
export default mongoose.Schema("Todo", todoSchema);
