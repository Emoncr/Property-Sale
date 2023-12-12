import jwt from "jsonwebtoken";
import { throwError } from "./error.js";

export const verifyToken = (req, res, next) => {
  const tooken = req.cookies.access_token;
  if (!tooken) return next(throwError(401, "Session End. Login Again! "));
  jwt.verify(tooken, process.env.JWT_SECRET, (err, user) => {
    if (err) return next(throwError(403, "Frbidden"));
    req.user = user;
    next();
  });
};
