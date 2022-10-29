import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import TimeTable from "../models/Timetable.js";

const createTimetable = asyncHandler(async (req,res) => {
    const { route,vehicle,driver,inspector } = req.body

    const timetable = await TimeTable({
        route,vehicle,driver,inspector
    })

    try {
        timetable.save().then(() => {
            res.status(201)
            res.json(timetable)
        }).catch((err) => {
            res.status(400)
        })
    }
    catch {
        res.status(400)
    }
    
})


const getAllTimetables = asyncHandler(async (req,res) => {
    try {
        TimeTable.find({}).then((resp) => {
            res.json(resp)
            res.status(201)
        }).catch((err) => {
            res.status(400)
        })
    }
    catch {
        res.status(400)
    }
})

export { createTimetable, getAllTimetables }