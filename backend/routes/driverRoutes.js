import express from "express";
const router = express.Router();

import {getTimetabByBusNo} from "../controllers/driverController.js"

router.get("/getTimeforDriver", getTimetabByBusNo)

export default router