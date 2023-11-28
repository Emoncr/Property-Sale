import express from "express";
import { createNotification ,getNotification} from "../controllers/notification.controller.js";
import { verifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, createNotification);
router.get("/:id", verifyToken, getNotification);

export default router;
