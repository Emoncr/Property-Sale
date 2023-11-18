import express from "express";
import {
  createConversation,
  getConversation,
} from "../controllers/conversation.controller.js";
import { verifyToken } from "../utils/varifyUser.js";

const router = express.Router();

router.get("/", getConversation);

router.post("/create", verifyToken, createConversation);

export default router;
