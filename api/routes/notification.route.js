import express from "express";
import { createNotification } from "../controllers/notification.controller.js";
import { verifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createNotification);

export default router;
