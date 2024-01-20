import express from "express";
import {
  createBussinessNote,
  deleteBussinessNote,
  getBussinessNote,
} from "../controller/bussinessNoteCtrl.js";

const router = express.Router();

router.post("/createBussinessNote", createBussinessNote);
router.get("/getBussinessNote/:userId", getBussinessNote);
router.delete("/deleteBussinessNote/:id", deleteBussinessNote);

export { router as bussinessNoteRouter };
