import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO);
  console.log('database connected');
}


// ===========secound way ==========

// mongoose.connect(process.env.MONGO).then(() => {
//   console.log("connected to Db");
// })
// .catch(er=>{
//   console.log(er);
// })

const app = express();

app.listen(3000, () => {
  console.log("server running at port 3000!");
});
