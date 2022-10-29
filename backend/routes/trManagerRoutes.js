import express from "express";
const router = express.Router();

import {
    createTimetable,
    getAllTimetables
} from "../controllers/transportMngerController.js"

router.post("/createTimetable", createTimetable);
router.get("/getTimetables", getAllTimetables);

export default router