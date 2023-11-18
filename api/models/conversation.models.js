import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    creatorId: {
      type: String,
      required: true,
    },
    participantId: {
      type: String,
      required: true,
    },
    chatPartner: {
      type: Object,
      required: true,
    },
    chatCreator: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const Conversation = mongoose.model("Conversations", conversationSchema);

export default Conversation;
