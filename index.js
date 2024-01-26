import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { userRouter } from "./src/routes/userRouter.js";
import { noteRouter } from "./src/routes/noteRoute.js";
import { bussinessNoteRouter } from "./src/routes/bussinessNoteRoute.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
  origin: true,
};

//Middleware

app.use(cors(corsOptions));
app.use(express.json());

mongoose.set("strictQuery", false);

const url = process.env.MONGODB_URL;

// const connectDB = async () => {
//   try {
//     await mongoose.connect(url, options);
//     console.log("mongodb connection successful");
//   } catch (err) {
//     "mongodb connection failed" + err;
//   }
// };

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("not able to connect" + err);
  });

app.use("/users", userRouter);
app.use("/notes", noteRouter);
app.use("/bussinessNotes", bussinessNoteRouter);

app.listen(port, () => {
  //   connectDB();
  console.log(`"server listening at" + ${port}`);
});
