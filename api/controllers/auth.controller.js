import bcrypt from "bcrypt";
import User from "../models/user.models.js";

export const singup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({
      message: "user created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error,
      message: "Registration failed",
    });
  }
};
