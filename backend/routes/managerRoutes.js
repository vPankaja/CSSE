import express from "express";
const router = express.Router();

import {
    postRoutes,getAllRoutes,deleteVehicle,deleteRoute,deleteTimetable,updateVehicle,getOneVehicle,updateRoute,getOneRoute
} from "../controllers/managerController.js"

router.post("/postRoutes", postRoutes);
router.get("/getAllRoutes", getAllRoutes);
router.delete("/deleteVehicle/:id",deleteVehicle)
router.delete("/deleteRoute/:id",deleteRoute)
router.delete("/deleteTimetable/:id",deleteTimetable)
router.put("/updateVehicle/:id",updateVehicle)
router.get("/getOneVehicle/:id",getOneVehicle)
router.put("/updateRoute/:id",updateRoute)
router.get("/getOneRoute/:id",getOneRoute)

export default router