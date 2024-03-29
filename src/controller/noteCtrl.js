import Notes from "../model/noteModel.js";
import userModel from "../model/userModel.js";

export const createNote = async (req, res) => {
  try {
    const { notes, userOwner } = req.body;

    const newNote = new Notes({
      notes,
      userOwner,
    });
    console.log(userOwner);
    console.log(newNote);
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    console.log("errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};

export const getNote = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);

    const notes = await Notes.find({ userOwner: { $in: user._id } });
    res.json(notes);
  } catch (err) {
    console.log("get errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
export const deleteNote = async (req, res) => {
  try {
    const user = await Notes.findById(req.params.id);
    console.log("id", user);

    const deleteNote = await Notes.findOneAndDelete({ _id: req.params.id });
    res.json(deleteNote);
    console.log(deleteNote);
  } catch (err) {
    console.log("get errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
