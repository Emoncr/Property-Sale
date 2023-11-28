import express from "express";
import { verifyToken } from "../utils/varifyUser.js";
import {
  createPost,
  deletePost,
  updatePost,
  singlePost,
  getListingPost,
} from "../controllers/post.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createPost);
router.delete("/delete/:id", verifyToken, deletePost);
router.post("/update/:id", verifyToken, updatePost);
router.get("/:id", singlePost);
router.get("/", getListingPost);


export default router;
