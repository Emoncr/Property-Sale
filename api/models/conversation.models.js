import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    creatorId: {
      type: String,
      required: true,
    },
    perticipantId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Conversations = mongoose.model("Conversations", conversationSchema);

export default Conversations
