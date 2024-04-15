import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  isAdmin: {
    type: Number,
    default: 0 
  }
});

const Userr = mongoose.model('Userr', userSchema);

export default Userr;
