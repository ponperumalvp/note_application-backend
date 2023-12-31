import express from "express";

import { createNote, getNote } from "../controller/noteCtrl.js";

const router = express.Router();

router.post("/createNote", createNote);
router.get("/getNote/:userId", getNote);

export { router as noteRouter };
