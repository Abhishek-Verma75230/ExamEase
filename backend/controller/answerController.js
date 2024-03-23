
import Answer from "../Models/Answer.js";
import Question from "../Models/Question.js";
export const postAnswer = async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    const answer = new Answer({ text: req.body.text, question: req.params.id });
    await answer.save();
    question.answers.push(answer);
    await question.save();
    res.status(201).json(answer);
  } catch (error) {
    console.error('Error posting answer:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


export const getAllAnswers = async (req, res) => {
    try {
      const answers = await Answer.find({ question: req.params.id });
      // console.log(req.params.id);
      res.json(answers);
    } catch (error) {
      console.error('Error fetching answers:', error);
    //   console.log(req.params.id);
      res.status(500).json({ error: 'Internal Serverrrrrrr Error' });
    }
  };

