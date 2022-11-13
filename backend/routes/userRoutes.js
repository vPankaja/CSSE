import express from "express";
const router = express.Router();

import {
  registerUser,
  login,
  getInfo,
  getAllUsers,
  reloadAcc,
} from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", login);
router.get("/info/:id", getInfo);
router.get("/allusers", getAllUsers);
router.post("/reload", reloadAcc);

export default router;
