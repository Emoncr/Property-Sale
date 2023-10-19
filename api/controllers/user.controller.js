import User from "../models/user.models.js";
import { throwError } from "../utils/error.js";
import bcrypt from "bcrypt";

export const userController = (req, res) => {
  res.send("user resgisterd from controller");
};

//=======update user api=======//
export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id) return throwError(401, "User Invalid");
  // const checkEmail = await User.findOne({ email });
  // if (checkEmail) return throwError(500, "Internal Server Error");
  // const checkUserName = await User.findOne({ username });
  // if (checkUserName) return throwError(500, "Internal Server Error");
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

    const { password, ...rest } = updateUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    throwError(error);
  }
};
