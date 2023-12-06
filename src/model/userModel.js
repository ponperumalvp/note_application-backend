import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // userNotes: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Notes",
  // },
});

export default mongoose.model("Users", userSchema);
