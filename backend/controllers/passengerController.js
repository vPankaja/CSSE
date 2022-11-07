import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import Journey from "../models/journeyModel.js";
import FullJourney from "../models/fullJourneys.js";

// Create journey
const startJourney = asyncHandler(async(req,res) => {
    const {timetableId, userId} = req.body
    const time = new Date()

    const journey = new Journey({
        timetableId, 
        userId,
        hours: time.getHours(),
        mins: time.getMinutes(),
        seconds: time.getSeconds()
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

    const time = new Date()

    Journey.findOne({timetableId: timetableId, userId:userId}).then((resp) => {
        let startHrs = resp.hours;
        let startMins = resp.mins;
        let startSecs = resp.seconds;

        const endHrs = time.getHours()
        const endMins = time.getMinutes()
        const endSecs = time.getSeconds()

        const hrDiff = endHrs - startHrs;
        const minDiff = endMins - startMins;
        const secDiff = endSecs - startSecs;

        const cost = (hrDiff*25 + minDiff*10 + secDiff*5)
        const startTime = startHrs + ':' + startMins + ':' + startSecs
        const endTime = endHrs + ':' + endMins + ':' + endSecs

        const completeJourney = new FullJourney({
            timetableId, userId, startTime, endTime, cost
        })

        completeJourney.save().then(respo => {
            Journey.findOneAndDelete({timetableId: timetableId, userId:userId}).then(() => {
                res.json(completeJourney)
                res.status(201)
            }).catch((err) => {
                console.log(err)
                res.status(400)
            })
        }).catch((err) => {
            console.log(err)
            res.status(400)
        })
    }).catch((err) => {
        console.log(err)
        res.status(400)
    })
})

export {startJourney, endJourney}