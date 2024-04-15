import express from "express";
const router = express.Router();
import { uploadLink } from "../controller/courseController.js";
import { getLinks } from "../controller/courseController.js";
import { login } from "../controller/authController.js";
import { signup } from "../controller/authController.js";

import { postAnswer } from "../controller/answerController.js";
import { getAllAnswers } from "../controller/answerController.js";
import { postQuestion } from "../controller/questionController.js";
import { getAllQuestions } from "../controller/questionController.js";
import { fetchNotice } from "../controller/noticeController.js";
import { addNotice } from "../controller/noticeController.js";
import isAdmin from "../Middleware/isadmin.js";
import { check } from "../controller/check.js";

import protectRoute from "../Middleware/authMiddleware.js";




router.post('/upload', uploadLink);
router.get('/links/:year/:branch', getLinks);


router.get('/questions',protectRoute, getAllQuestions);
router.post('/questions',protectRoute, postQuestion);
router.post('/questions/:id/answers',protectRoute, postAnswer);

router.get('/questions/:id/answers',protectRoute, getAllAnswers);
router.post('/signup', signup);
router.post('/login', login);
router.get('/userData',protectRoute,isAdmin,check);

router.post('/notices',protectRoute, isAdmin, addNotice);

router.get('/getnotices',protectRoute,fetchNotice);


export default router;