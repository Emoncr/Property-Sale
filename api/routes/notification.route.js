import express from "express";
import { createNotification ,getNotification} from "../controllers/notification.controller.js";
import { verifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.post("/create",  createNotification);
router.get("/:id",  getNotification);

export default router;
