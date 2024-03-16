import express from 'express';
import {tutor} from '../controllers/tutor.controller.js'

const router = express.Router();

router.get('/gettutor', tutor); 

export default router;