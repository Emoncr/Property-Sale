import Notifications from "../models/notification.model.js";
import { throwError } from "../utils/error.js";

export const createNotification = async (req, res, next) => {
  if (req.user.id != req.body.notify_from)
    return next(throwError(400, "Token Expired, Login for create post"));
  try {
    const createdNotification = await Notifications.create(req.body);
    res.status(201).json(createdNotification);
  } catch (error) {
    next(error);
  }
};




//======= Get Notification=======//

export const getNotification = async (req, res, next) => {
  if (req.user.id != req.params.id)
    return next(throwError(400, "Token Expired, Login for create post"));

  try {
    const notification = await Notifications.find({ notify_To: req.params.id });
    res.status(200).json(notification);
  } catch (error) {
    next(error);
  }
};
