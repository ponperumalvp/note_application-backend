import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
  notes: {
    type: Object,
    required: true,
  },
  userOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
});

export default mongoose.model("BussinessNotes", noteSchema);
