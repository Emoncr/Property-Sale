import Listing from "../models/listing.models.js";
import { throwError } from "../utils/error.js";

export const createPost = async (req, res, next) => {
  if (req.user.id != req.body.userRef)
    return next(throwError(400, "Token Expired, Login for create post"));
  try {
    const post = await Listing.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

export const deletePost = async (req, res, next) => {
  const targetedPost = await Listing.findById(req.params.id);
  console.log(targetedPost);
  if (!targetedPost) return next(throwError(404, "Post not found"));
  if (req.user.id != targetedPost.userRef)
    return next(throwError(400, "You can post on your own account"));
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Post delete successfully");
  } catch (error) {
    next(throwError(400, error));
  }
};
