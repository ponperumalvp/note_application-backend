import express from "express";
import {
  createBussinessNote,
  deleteBussinessNote,
  getBussinessNote,
} from "../controller/bussinessNoteCtrl.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/createBussinessNote", verifyToken, createBussinessNote);
router.get("/getBussinessNote/:userId", getBussinessNote);
router.delete("/deleteBussinessNote/:id", verifyToken, deleteBussinessNote);

export { router as bussinessNoteRouter };
