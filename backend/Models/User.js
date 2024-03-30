
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Userr = mongoose.model('Userr', userSchema);


export default Userr;
