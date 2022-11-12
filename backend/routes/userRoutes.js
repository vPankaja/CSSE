import express from "express";
const router = express.Router();

import {
    registerUser,
    login,
    getInfo,
    reloadAcc
} from "../controllers/userController.js"

router.post("/register", registerUser);
router.post("/login", login);
router.get("/info/:id", getInfo);
router.post('/reload', reloadAcc)

export default router