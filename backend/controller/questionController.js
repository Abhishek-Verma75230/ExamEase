
import Question from "../Models/Question.js";
export const getAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const postQuestion = async (req, res) => {
    try {
        const question = new Question({ text: req.body.text });
        await question.save();
        res.status(201).json(question);
    } catch (error) {
        console.error('Error posting question:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
