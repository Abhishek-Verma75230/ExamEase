import express from "express";
const router = express.Router();
import { uploadLink } from "../controller/courseController.js";
import { getLinks } from "../controller/courseController.js";

router.post('/upload', uploadLink);


router.get('/links/:year/:branch', getLinks);






export default router;