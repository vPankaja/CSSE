import express from "express";
const router = express.Router();

import {
    createTimetable,
    getVehicleByID,
    getAllVehicles, 
    postVehicle,
    getRouteById,
    getAllTimetables
} from "../controllers/transportMngerController.js"

router.post("/createTimetable", createTimetable);
router.get("/getTimetables", getAllTimetables);
router.post("/postVehicle", postVehicle);
router.get("/getVehicleById/:id", getVehicleByID);
router.get("/getAllVehicles", getAllVehicles);
router.get("/getRouteById/:id", getRouteById);

export default router