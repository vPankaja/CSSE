import express from "express";
const router = express.Router();

import {startJourney, endJourney} from "../controllers/passengerController.js"

router.post("/startJourney", startJourney)
router.post("/endJourney", endJourney)

export default router