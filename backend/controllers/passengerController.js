import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import Journey from "../models/journeyModel.js";

// Create journey
const startJourney = asyncHandler(async(req,res) => {
    const {timetableId, userId} = req.body

    const journey = new Journey({
        timetableId, userId
    })

    try {
        journey.save().then(() => {
            res.json(journey)
            res.status(201)
        }).catch(() => {
            res.status(400)
        })
    }
    catch {
        res.status(400)
    }
})

// End journey
const endJourney = asyncHandler(async(req,res) => {
    const {timetableId, userId} = req.body

    Journey.findOne({timetableId: timetableId, userId:userId}).then((resp) => {
        
    })
})

export {startJourney}