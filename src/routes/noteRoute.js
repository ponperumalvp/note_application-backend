import express from "express";

import { createNote, deleteNote, getNote } from "../controller/noteCtrl.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/createNote", verifyToken, createNote);
router.get("/getNote/:userId", getNote);
router.delete("/deleteNote/:id", verifyToken, deleteNote);

export { router as noteRouter };
