import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./src/routes/userRouter.js";
import { noteRouter } from "./src/routes/noteRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

//Middleware

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URL;

var options = {
  authSource: "admin",
  user: "admin",
  pass: "ponperumal",
};

// const connectDB = async () => {
//   try {
//     await mongoose.connect(url, options);
//     console.log("mongodb connection successful");
//   } catch (err) {
//     "mongodb connection failed" + err;
//   }
// };

mongoose
  .connect(url, options)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("not able to connect");
  });

app.use("/users", userRouter);
app.use("/notes", noteRouter);

app.listen(port, () => {
  //   connectDB();
  console.log(`server listening at http://localhost:${port}`);
});
