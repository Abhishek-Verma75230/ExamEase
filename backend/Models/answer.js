
import mongoose from "mongoose";

const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' }
});


const Answer=mongoose.model('Answer',answerSchema);
export default Answer;

