import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const Connection = async () => {
  const PASSWORD = process.env.MONGODB_PASSWORD; 
  const URL = `mongodb://education:${PASSWORD}@ac-ocravo9-shard-00-00.mxhzlac.mongodb.net:27017,ac-ocravo9-shard-00-01.mxhzlac.mongodb.net:27017,ac-ocravo9-shard-00-02.mxhzlac.mongodb.net:27017/?ssl=true&replicaSet=atlas-s1yls6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully to server.');
  } catch (error) {
    console.error('Error while connecting to database:', error.message);
  }
};

export default Connection;
