import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import TimeTable from "../models/Timetable.js";
import Vehicles from "../models/Vehicle.js";
import Routes from "../models/RoutesModel.js";

// Create timetable
const createTimetable = asyncHandler(async (req, res) => {
  const { route, vehicle, driver, inspector, date, time } = req.body;

  const timetable = await TimeTable({
    route,
    vehicle,
    driver,
    inspector,
    date,
    time,
  });

  try {
    timetable
      .save()
      .then(() => {
        res.status(201);
        res.json(timetable);
      })
      .catch((err) => {
        res.status(400);
      });
  } catch {
    res.status(400);
  }
});

// Get vehicles by vehicleno
const getVehicleByID = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    Vehicles.findOne({ vehicleNo: id })
      .then((resp) => {
        res.json(resp);
        res.status(201);
      })
      .catch((err) => {
        res.status(400);
      });
  } catch {
    res.status(400);
  }
});

// Get all vehicles
const getAllVehicles = asyncHandler(async (req, res) => {
  try {
    Vehicles.find({})
      .then((resp) => {
        res.json(resp);
        res.status(201);
      })
      .catch((err) => {
        res.status(400);
      });
  } catch {
    res.status(400);
  }
});

// get route by route id
const getRouteById = asyncHandler(async (req, res) => {
  const id = req.params.id;

  try {
    Routes.findOne({ routeId: id })
      .then((resp) => {
        res.json(resp);
        res.status(201);
      })
      .catch((err) => {
        res.status(400);
      });
  } catch {
    res.status(400);
  }
});

// Create vehicle
const postVehicle = asyncHandler(async (req, res) => {
  const { vehicleNo, driverName, vehicleType, cost } = req.body;

  const vehicle = new Vehicles({
    vehicleNo,
    driverName,
    vehicleType,
    cost,
  });

  try {
    vehicle
      .save()
      .then((resp) => {
        res.json(resp);
        res.status(201);
      })
      .catch((err) => {
        res.status(400);
        res.json({})
      });
  } catch {
    res.status(400);
  }
});

const getAllTimetables = asyncHandler(async (req, res) => {
  try {
    TimeTable.find({})
      .then((resp) => {
        res.json(resp);
        res.status(201);
      })
      .catch((err) => {
        res.status(400);
      });
  } catch {
    res.status(400);
  }
});

const deleteVehicle = asyncHandler(async (req, res) => {
  const id = req.params.id;
  console.log(id);
  Vehicles.findByIdAndDelete(id, (err, docs) => {
    if (err) {
      console.log(err);
      res.json(err);
      res.status(400);
    } else {
      res.status(200);
    }
  });
});

const deleteTimetable = asyncHandler(async (req,res) => {
    const id = req.params.id

    TimeTable.findByIdAndDelete(id).then((resp) => {
        res.json(resp)
        res.status(201);
    }).catch((err) => {
        console.log(err) 
        res.status(400)
    })
})


const createRoute = asyncHandler(async (req,res) => {
  const { routeId, route, trafficType } = req.body;

  const newRoute = new Routes({
    routeId, route, trafficType
  })

  newRoute.save().then((resp) => {
    res.json(resp)
    res.status(201)
  }).catch(err => {
    console.log(err)
    res.status(400)
  })
})

const getAllRoutes = asyncHandler(async (req,res) => {
  Routes.find({}).then(resp => {
    res.json(resp)
    res.status(201)
  }).catch((err) => {
    console.log(err)
    res.status(400)
  })
})

export {
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
};
