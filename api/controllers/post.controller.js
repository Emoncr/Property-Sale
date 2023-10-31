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
  const isPostExist = await Listing.findById(req.params.id);
  if (!isPostExist) return next(throwError(404, "Post not found"));
  if (req.user.id != isPostExist.userRef)
    return next(throwError(400, "You can delete your own post"));
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Post delete successfully");
  } catch (error) {
    next(error);
  }
};

//===== Handle Post Update ======//
export const updatePost = async (req, res, next) => {
  const isPostExist = await Listing.findById(req.params.id);
  if (!isPostExist) return next(throwError(404, "Post not found"));
  if (req.user.id != isPostExist.userRef)
    return next(throwError(400, "You can only update  your own account"));
  try {
    const updatedPost = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

//===== Get A Single Post ====//
export const singlePost = async (req, res, next) => {
  try {
    const post = await Listing.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};
