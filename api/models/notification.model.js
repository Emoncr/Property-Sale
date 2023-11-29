import { mongoose } from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    chatId: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notifications", notificationSchema);
export default Notification;
