import express from "express";
import { createNotification } from "../controllers/notification.controller.js";

const router = express.Router();

router.post("/create", createNotification);

export default router;
