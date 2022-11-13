import asyncHandler from 'express-async-handler';

import express from 'express';
import { ObjectId } from 'mongodb';
import TimeTable from '../models/Timetable.js';
import Vehicles from '../models/Vehicle.js';
import Routes from '../models/RoutesModel.js';
import Users from '../models/UserModel.js';

import nodemailer from 'nodemailer';

//methord - post
const calculate = asyncHandler(async (req, res) => {
  const filter = { email: req.body.email };

  const userB = await Users.findOne(filter);
  let ex_balance = userB.balance - req.body.balance;

  const update = { balance: ex_balance };

  await Users.findOneAndUpdate(filter, update, {
    returnOriginal: false,
  })
    .then(() => {
      res.json('calculated');
    })
    .catch((err) => {
      console.log(err);
    });
});

const postRoutes = asyncHandler(async (req, res) => {
  const { routeId, route, trafficType } = req.body;

  const routes = new Routes({
    routeId,
    route,
    trafficType,
  });

  try {
    routes
      .save()
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

const getAllRoutes = asyncHandler(async (req, res) => {
  try {
    Routes.find({})
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
const monitorRoutes = asyncHandler(async (req, res) => {
  try {
    Routes.aggregate([
      {
        $group: {
          _id: {
            trafficType: '$trafficType',
          },
          count: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: '$_id.trafficType',
          data: {
            $push: {
              trafficType: '$_id.trafficType',
              count: '$count',
            },
          },
          count: { $sum: '$count' },
        },
      },
      { $sort: { count: -1 } },
    ])
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

//methord - put
const deactivateUsers = async (req, res) => {
  const Oid = req.params.id;
  //get user data
  const userData = await Users.findById(req.params.id);
  const filter = { _id: Oid };
  const update = { status: false };
  //update by id
  await Users.findOneAndUpdate(filter, update, {
    returnOriginal: false,
  })
    .then(() => {
      // var transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //     user: 'mail@gmail.com',
      //     pass: '',
      //   },
      // });

      // var mailOptions = {
      //   from: 'email@gmail.com',
      //   to: userData.email,
      //   subject: 'deactivated',
      //   text: `deactivated your acount  `,
      // };

      // transporter.sendMail(mailOptions, function (error, info) {
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' + info.response);
      //   }
      // });

      res.json('Deactivated User');
    })
    .catch((err) => {
      console.log(err);
    });
};

const activateUsers = async (req, res) => {
  const Oid = req.params.id;

  const filter = { _id: Oid };
  const update = { status: true };
  //update by id
  await Users.findOneAndUpdate(filter, update, {
    returnOriginal: false,
  })
    .then(() => {
      res.json('Activated User');
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteVehicle = async (req, res) => {
  const Oid = req.params.id;
  await Vehicles.findByIdAndDelete(Oid)
    .then(() => {
      res.json('Vehicle Deleted');
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteRoute = async (req, res) => {
  const Oid = req.params.id;
  await Routes.findByIdAndDelete(Oid)
    .then(() => {
      res.json('Route Canceled');
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteTimetable = async (req, res) => {
  const Oid = req.params.id;
  await TimeTable.findByIdAndDelete(Oid)
    .then(() => {
      res.json('TimeTable Canceled');
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateVehicle = async (req, res) => {
  const Oid = req.params.id;
  const { vehicleNo, driverName, vehicleType, cost } = req.body;

  await Vehicles.findByIdAndUpdate(Oid, {
    vehicleNo,
    driverName,
    vehicleType,
    cost,
  })
    .then(() => {
      res.status(200).send({ status: 'Vehicle updated' });
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
  const { routeId, route, trafficType } = req.body;

  await Routes.findByIdAndUpdate(Oid, { routeId, route, trafficType })
    .then(() => {
      res.status(200).send({ status: 'Route updated' });
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

export {
  postRoutes,
  getAllRoutes,
  deleteVehicle,
  deleteRoute,
  deleteTimetable,
  updateVehicle,
  getOneVehicle,
  updateRoute,
  getOneRoute,
  monitorRoutes,
  deactivateUsers,
  activateUsers,
  calculate,
};
