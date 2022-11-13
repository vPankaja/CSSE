import express from "express";
const router = express.Router();

import {startJourney} from "../controllers/passengerController.js"

router.post("/startJourney", startJourney)

export default router