import express from "express";
const router = express.Router();

import {
  registerUser,
  login,
  getInfo,
  getAllUsers,
  deleteUser,
  reloadAcc,
} from "../controllers/userController.js";

router.post("/register", registerUser);
router.post("/login", login);
router.get("/info/:id", getInfo);
router.get("/allusers", getAllUsers);
router.delete("/:id", deleteUser);
router.post("/reload", reloadAcc);

export default router;
