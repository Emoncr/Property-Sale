import express from "express";
import { verifyToken } from "../utils/varifyUser.js";
import {
  createPost,
  deletePost,
  updatePost,
  singlePost
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.delete("/delete/:id", verifyToken, deletePost);
router.post("/update/:id", verifyToken, updatePost);
router.get("/:id", singlePost);
export default router;
