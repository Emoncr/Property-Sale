import express from "express";
import { signin, singup } from "../controllers/auth.controller.js";

const route = express.Router();

route.post("/signup", singup);

route.post("/signin", signin);

export default route;
