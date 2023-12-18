import bcrypt from "bcrypt";
import User from "../models/user.models.js";
import { throwError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import { passwordGenarator, usernameGenarator } from "../utils/helper.js";

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
  const { email, userPassword } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(throwError(404, "Worng Credentials!"));
    const isValidPassword = bcrypt.compareSync(
      userPassword,
      validUser.password
    );
    if (!isValidPassword) return next(throwError(401, "Worng Credentials!"));

    const { password, ...rest } = validUser._doc;
    const tooken = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "720h",
    });
    res
      .cookie("access_token", tooken, { httpOnly: true, secure: true })
      .status(200)
      .json(rest);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//=====Handle Google Singin Here ======//
export const googleSignIn = async (req, res, next) => {
  const { email, name, photo } = req.body;
  try {
    const user = await User.findOne({ email });

    //====IF user exist in DB====//
    if (user) {
      const tooken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "720h",
      });

      const { password, ...rest } = user._doc;
      res
        .cookie("access_token", tooken, { httpOnly: true, secure: true })
        .status(200)
        .json(rest);
    }
    //====IF user not exist in DB====//
    else {
      const hashedPassword = bcrypt.hashSync(passwordGenarator(), 10);
      const newUser = new User({
        name,
        username: usernameGenarator(name),
        email,
        password: hashedPassword,
        avatar: photo,
      });
      const user = await newUser.save();
      const tooken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "720h",
      });
      const { pass: password, ...rest } = user._doc;
      res
        .cookie("access_token", tooken, { httpOnly: true, secure: true })
        .status(200)
        .json(rest);
    }
  } catch (error) {
    //======Handling Error Here =====//
    next(throwError(error));
  }
};

//=====handle signout=====//
export const signOut = async (req, res, next) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json("User Deleted Successfully!");
  } catch (error) {
    next(error);
  }
};
