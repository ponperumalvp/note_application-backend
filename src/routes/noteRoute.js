import express from "express";

import { createNote, deleteNote, getNote } from "../controller/noteCtrl.js";

const router = express.Router();

router.post("/createNote", createNote);
router.get("/getNote/:userId", getNote);
router.delete("/deleteNote/:id", deleteNote);

export { router as noteRouter };
