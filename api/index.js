import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRouter from "./routes/user.route.js";
import auth from "./routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());



main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
  console.log("database connected");
}

// ===========Another way ==========//

// mongoose.connect(process.env.MONGO).then(() => {
//   console.log("connected to Db");
// })
// .catch(er=>{
//   console.log(er);
// })

app.listen(3000, () => {
  console.log("server running at port 3000!");
});

app.use("/api/users", userRouter);
app.use("/api/auth", auth);

// ======app middleware ========//
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
