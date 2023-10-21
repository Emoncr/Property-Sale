import User from "../models/user.models.js";
import { throwError } from "../utils/error.js";
import bcrypt from "bcrypt";

export const userController = (req, res) => {
  res.send("user resgisterd from controller");
};

//=======update user api=======//
export const updateUser = async (req, res, next) => {
  const { email, username } = req.body;
  if (req.user.id !== req.params.id)
    return next(throwError(401, "User Invalid"));

  const checkEmail = await User.findOne({ email });
  if (checkEmail) return next(throwError(500, "Invalid Information"));

  const checkUserName = await User.findOne({ username });
  if (checkUserName) return next(throwError(500, "Invalid Information"));
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );
    console.log("success two");
    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(throwError(error));
  }
};
