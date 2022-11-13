import express from "express";
const router = express.Router();

import {getTimetabByBusNo, findVehicle, registerDriver, deleteTimetable} from "../controllers/driverController.js"

router.post("/getTimeforDriver", getTimetabByBusNo)
router.post("/findvehicle", findVehicle)
router.post("/registerDriver", registerDriver)
router.delete("/deleteTimetable/:id", deleteTimetable)

export default router