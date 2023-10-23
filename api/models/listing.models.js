import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      require: true,
      type: String,
    },
    description: {
      require: true,
      type: String,
    },
    address: {
      require: true,
      type: String,
    },
    bath: {
      require: true,
      type: Number,
    },
    bed: {
      require: true,
      type: Number,
    },
    price: {
      require: true,
      type: Number,
    },
    discountPrice: {
      type: Number,
    },
    furnished: {
      require: true,
      type: Boolean,
    },
    parking: {
      require: true,
      type: Boolean,
    },
    type: {
      type: String,
      require: true,
    },
    offer: {
      type: Boolean,
      require: true,
    },
    imgUrl: {
      type: Array,
      require: true,
    },
    userRef: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Post", listingSchema);

export default Listing;
