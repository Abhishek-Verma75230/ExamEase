import express from "express";
const router = express.Router();
import { uploadLink } from "../controller/courseController.js";
import { getLinks } from "../controller/courseController.js";

import { postAnswer } from "../controller/answerController.js";
import { getAllAnswers } from "../controller/answerController.js";
import { postQuestion } from "../controller/questionController.js";
import { getAllQuestions } from "../controller/questionController.js";






router.post('/upload', uploadLink);
router.get('/links/:year/:branch', getLinks);


router.get('/questions', getAllQuestions);
router.post('/questions', postQuestion);
router.post('/questions/:id/answers', postAnswer);

router.get('/questions/:id/answers', getAllAnswers);


export default router;