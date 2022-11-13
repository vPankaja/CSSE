import express from "express";
const router = express.Router();

import {
    createTimetable,
    getVehicleByID,
    getAllVehicles, 
    postVehicle,
    getRouteById,
    getAllTimetables,
    deleteVehicle,
    deleteTimetable,
    createRoute,
    getAllRoutes
} from "../controllers/transportMngerController.js"

router.post("/createTimetable", createTimetable);
router.get("/getTimetables", getAllTimetables);
router.post("/postVehicle", postVehicle);
router.get("/getVehicleById/:id", getVehicleByID);
router.get("/getAllVehicles", getAllVehicles);
router.get("/getRouteById/:id", getRouteById);
router.post("/deleteVehicle/:id", deleteVehicle);
router.delete("/deleteTimetable/:id", deleteTimetable);
router.post("/createRoute", createRoute);
router.get("/getAllRoutes", getAllRoutes);

export default router