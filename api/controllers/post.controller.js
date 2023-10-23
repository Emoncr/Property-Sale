import Listing from "../models/listing.models.js";

export const createPost = async (req, res, next) => {
  try {
    const post = await Listing.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};
