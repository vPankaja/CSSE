import asyncHandler from "express-async-handler";

import express from "express";
import { ObjectId } from "mongodb";
import Users from "../models/UserModel.js";

// Register user
const registerUser = asyncHandler(async (req,res) => {
    const {name, email, phoneNumber, type, password} = req.body

    const User = await Users({
        name, email, phoneNumber, type, password
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

export { registerUser, login, getInfo, reloadAcc }