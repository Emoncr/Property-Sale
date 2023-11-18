import express from "express";
import { getMessage, postMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/", getMessage);

router.get("/create", postMessage);


export default router