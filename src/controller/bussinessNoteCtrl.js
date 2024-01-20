import BussinessNotes from "../model/bussinessNoteModel.js";
import userModel from "../model/userModel.js";

export const createBussinessNote = async (req, res) => {
  try {
    const { notes, userOwner } = req.body;

    const newNote = new BussinessNotes({
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

export const getBussinessNote = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.userId);
    console.log(user);
    // console.log(user);
    const notes = await BussinessNotes.find({ userOwner: { $in: user._id } });
    res.json(notes);
  } catch (err) {
    console.log("get errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
export const deleteBussinessNote = async (req, res) => {
  try {
    const user = await BussinessNotes.findById(req.params.id);
    console.log("id", user);

    const deleteNote = await BussinessNotes.findOneAndDelete({
      _id: req.params.id,
    });
    res.json(deleteNote);
    console.log(deleteNote);
  } catch (err) {
    console.log("get errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
