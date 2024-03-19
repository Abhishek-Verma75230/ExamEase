import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  year: String,
  branch: String,
  topic: String,
  link: String
});


const User=mongoose.model('User',courseSchema);

export default User;
