import express from "express";
import {
  createConversation,
  getConversation,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.get("/", getConversation);

router.post("/create", createConversation);

export default router;
