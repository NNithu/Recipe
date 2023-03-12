import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: String,
  message: String,
  name: String,
  tags: [String],
  selectedFile: String,

});

const postMessage = mongoose.model("postMessage", postSchema);

export default postMessage;
