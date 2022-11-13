import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import TimeTable from "../models/Timetable.js";
import Vehicles from "../models/Vehicle.js";
import Drivers from "../models/DriverModel.js";

const getTimetabByBusNo = asyncHandler(async (req,res) => {
    const { busNo, routeName } = req.body

    TimeTable.find({ 'route.routeId': routeName, 'vehicle.vehicleNo': busNo }).then((resp) => {
        res.json(resp)
        res.status(201)
    }).catch((err) => {
        console.log(err)
        res.status(400)
    })
})

const findVehicle = asyncHandler(async (req,res) => {
    const { busNo } = req.body;
    console.log(busNo)
    Vehicles.findOne({ vehicleNo: busNo }).then((resp) => {
        console.log(resp)
        let dar = {
            available: resp != null ? 1 : 0
        }
        res.json(dar)
        res.status(201)
    }).catch((err) => {
        console.log(err)
        res.status(400)
    })
})

const registerDriver = asyncHandler(async (req,res) => {
    const {name,nic,dob, email, phoneNumber, type, password, busNo, routeNo} = req.body

    const driver = new Drivers({
        name,nic,dob, email, phoneNumber, type, password, busNo, routeNo
    })

    driver.save().then((resp) => {
        res.json(resp)
        res.status(201)
    }).catch((err) => {
        console.log(err)
        res.json({})
        res.status(401)
    })
})

const deleteTimetable = asyncHandler(async (req,res) => {
    const id = req.params.id

    TimeTable.findByIdAndDelete(id).then((resp) => {
        res.json(resp)
        res.status(201)
    }).catch(err => {
        console.log(err)
        res.status(400)
        res.json({})
    })
})

export {getTimetabByBusNo, findVehicle, registerDriver, deleteTimetable}