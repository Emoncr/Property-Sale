import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
// import userRouter from "./routes/user.route.js";
import userRouter from "./api/routes/user.route.js";


// import auth from "./routes/auth.route.js";
import auth from "./api/routes/auth.route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// import postRouter from "./routes/post.route.js";
import postRouter from "./api/routes/post.route.js";
import path from "path";

const app = express();
app.use(express.json());
app.use(cookieParser());

if (process.env.NODE_ENV === "local") {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
} else {
  app.use(
    cors({
      credentials: true,
    })
  );
}

const __dirname = path.resolve();
const PORT = process.env.PORT || 3000;

// Connect to the database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO);
  console.log("Database connected");
}

// Starting the server
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});

// Routes
app.use("/api/users", userRouter);
app.use("/api/auth", auth);
app.use("/api/posts", postRouter);

// Serve static files and handle client-side routing
if (process.env.NODE_ENV === "production") {
  const staticFilesPath = path.join(__dirname, "client", "dist");
  app.use(express.static(staticFilesPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(staticFilesPath, "index.html"));
  });
}

// Handle middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
