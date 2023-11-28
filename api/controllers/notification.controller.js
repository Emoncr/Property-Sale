import Notifications from "../models/notification.model.js";

export const createNotification = async (req, res, next) => {
  if (req.user.id != req.body.notify_from)
    return next(throwError(400, "Token Expired, Login for create post"));
  try {
    const post = await Notifications.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};
