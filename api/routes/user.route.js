import express from "express";
import { updateUser, userController } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.get("/", userController);
router.post("/update/:id", verifyToken, updateUser);

export default router;
