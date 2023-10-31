import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    description: {
      required: true,
      type: String,
    },
    address: {
      required: true,
      type: String,
    },
    area: {
      required: true,
      type: Number,
    },
    bath: {
      required: true,
      type: Number,
    },
    bed: {
      required: true,
      type: Number,
    },
    price: {
      required: true,
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    furnished: {
      required: true,
      type: Boolean,
    },
    parking: {
      required: true,
      type: Boolean,
    },
    type: {
      type: String,
      required: true,
    },
    offer: {
      type: Boolean,
      required: true,
    },
    imgUrl: {
      type: Array,
      required: true,
    },
    userRef: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Post", listingSchema);

export default Listing;
