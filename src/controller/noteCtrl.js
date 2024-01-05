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
    console.log(user);
    // console.log(user);
    const notes = await Notes.find({ userOwner: { $in: user._id } });
    res.json(notes);
    console.log(notes);
  } catch (err) {
    console.log("get errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
