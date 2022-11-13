import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import TimeTable from "../models/Timetable.js";
import Vehicles from "../models/Vehicle.js";
import Routes from "../models/RoutesModel.js";

const postRoutes = asyncHandler(async (req,res) => {
    const {routeId,route,trafficType} = req.body
    
    const routes = new Routes({
        routeId,route,trafficType
    })

    try {
        routes.save().then((resp) => {
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

const getAllRoutes = asyncHandler(async (req,res) => {
    try {
        Routes.find({}).then((resp) => {
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

const deleteVehicle = async (req, res) => {
    const Oid = req.params.id;
    await Vehicles.findByIdAndDelete(Oid)
      .then(() => {
        res.json("Vehicle Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteRoute = async (req, res) => {
    const Oid = req.params.id;
    await Routes.findByIdAndDelete(Oid)
      .then(() => {
        res.json("Route Canceled");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTimetable = async (req, res) => {
    const Oid = req.params.id;
    await TimeTable.findByIdAndDelete(Oid)
      .then(() => {
        res.json("TimeTable Canceled");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateVehicle = async (req, res) => {
    const Oid = req.params.id;
    const { vehicleNo, driverName, vehicleType, cost} = req.body;
  
    await Vehicles.findByIdAndUpdate(Oid, { vehicleNo, driverName, vehicleType, cost })
      .then(() => {
        res.status(200).send({ status: "Vehicle updated" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getOneVehicle = async (req, res) => {
    const Oid = req.params.id;
    await Vehicles.findById(Oid)
      .then((vehicle) => {
        res.json(vehicle);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateRoute = async (req, res) => {
    const Oid = req.params.id;
    const { routeId,route,trafficType} = req.body;
  
    await Routes.findByIdAndUpdate(Oid, { routeId,route,trafficType })
      .then(() => {
        res.status(200).send({ status: "Route updated" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getOneRoute = async (req, res) => {
    const Oid = req.params.id;
    await Routes.findById(Oid)
      .then((route) => {
        res.json(route);
      })
      .catch((err) => {
        console.log(err);
      });
  };

export {postRoutes,getAllRoutes,deleteVehicle,deleteRoute,deleteTimetable,updateVehicle,getOneVehicle,updateRoute,getOneRoute}