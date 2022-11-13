import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import Users from "../models/UserModel.js";

// Register user
const registerUser = asyncHandler(async (req,res) => {
    const {name,nic,dob, email, phoneNumber, type, password} = req.body

    const User = await Users({
        name,nic, dob, email, phoneNumber, type, password
    })

    try {
        User.save().then(() => {
            res.status(201).json(User)
        }).catch((err) => {
            console.log(err)
        })
    }
    catch {
        res.status(400)
    }
})

const login = asyncHandler(async (req,res) => {
    const {username} = req.body

    try {
        Users.findOne({ email: username}).then((resp)=> {
            res.json(resp)
            res.status(201)
        }).catch((err) => {
            console.log(err)
            res.status(400)
        })
    }
    catch {
        res.status(400)
    }
})

// Get user details
const getInfo = asyncHandler(async (req,res) => {
    const userId = req.params.id

    Users.findById(userId).then((resp) => {
        res.json(resp)
        res.status(201)
    }).catch((err) => {
        console.log(err)
        res.status(400)
    })
})

// Get All users
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await Users.find({});
    res.json(users);
  });

//Delete user
const deleteUser = asyncHandler(async (req, res) => {
    const users = await Users.findById(req.params.id);
  
    if (users) {
      await users.remove();
      res.json({ message: "User removed" });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  });

// Reload acc
const reloadAcc = asyncHandler(async (req,res) => {
    const {userId, amount} = req.body

    Users.findById(userId).then((respo) => {
        Users.findByIdAndUpdate(userId, {balance: respo.balance + amount}).then((resp) => {
            res.json(resp)
            res.status(201)
        }).catch(err => {
            console.log(err)
            res.status(400)
        })
    }).catch(err => {
        console.log(err)
        res.status(400)
    })
})

export { registerUser, login, getInfo,getAllUsers,deleteUser, reloadAcc }