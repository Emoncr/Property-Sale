import express from "express";
import {
  googleSignIn,
  signin,
  singup,
} from "../controllers/auth.controller.js";



const route = express.Router();

route.post("/signup", singup);
route.post("/signin", signin);
route.post("/google", googleSignIn);

export default route;
