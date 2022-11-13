import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import TimeTable from "../models/Timetable.js";

const getTimetabByBusNo = asyncHandler(async (req,res) => {
    const { busNo, routeName } = req.body

    TimeTable.find({ routeId: routeName, vehicleNo: busNo }).then((resp) => {
        res.json(resp)
        res.status(201)
    }).catch((err) => {
        console.log(err)
        res.status(400)
    })
})

export {getTimetabByBusNo}