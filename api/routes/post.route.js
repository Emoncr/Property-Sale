import express from "express";
import { verifyToken } from "../utils/varifyUser.js";
import { createPost, deletePost } from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.delete("/delete/:id", verifyToken, deletePost);
export default router;
