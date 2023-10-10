import bcrypt, { compareSync } from "bcrypt";
import User from "../models/user.models.js";
import { throwError } from "../utils/error.js";
import jwt from "jsonwebtoken";

//======handle singup route ===========//
export const singup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};

// ========sing in route handling here =====//

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(throwError(404, "Worng Credentials!"));
    const isValidPassword = bcrypt.compareSync(password, validUser.password);
    if (!isValidPassword) return next(throwError(401, "Worng Credentials!"));

    const { password: pass, ...rest } = validUser._doc;
    const tooken = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res
      .cookie("access_token", tooken, { httpOnly: true, secure: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
