import { mongoose } from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    notification: {
      type: Array,
      required: true,
    },
    chatID: {
      type: String,
      required: true,
    },
    notify_from: {
      type: String,
      required: true,
    },
    notify_To: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Notification = mongoose.model("Notifications", notificationSchema);
export default Notification;
