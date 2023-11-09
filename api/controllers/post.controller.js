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

//====GET LISTING Post ====//

export const getListingPost = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit) || 9;
    const startIndex = parseInt(req.query.startIndex) || 0;

    let offer = req.query.offer;
    if (offer === false || offer === undefined) {
      offer = { $in: [false, true] };
    }

    let parking = req.query.parking;
    if (parking === false || parking === undefined) {
      parking = { $in: [false, true] };
    }

    let furnished = req.query.furnished;
    if (furnished === false || furnished === undefined) {
      furnished = { $in: [false, true] };
    }

    let type = req.query.type;
    if (type === false || type === "all" || type === undefined) {
      type = { $in: ["sale", "rent"] };
    }

    const searchTerm = req.query.searchTerm || "";
    const sort = req.query.sort || "createdAt";

    const order = req.query.order || "desc";
    const listings = await Listing.find({
      title: {
        $regex: searchTerm,
        $options: "i",
      },
      offer,
      parking,
      furnished,
      type,
    })
      .sort({
        [sort]: order,
      })
      .limit(limit)
      .skip(startIndex);

    res.status(200).json(listings);
  } catch (error) {
    next(error);
  }
};
