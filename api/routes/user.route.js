import express from "express";
import {
  deleteUser,
  updateUser,
  userController,
  userPosts,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.get("/", userController);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/posts/:id", verifyToken, userPosts);
export default router;
