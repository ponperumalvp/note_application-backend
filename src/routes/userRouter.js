import express from "express";

import { register } from "../controller/userCtrl";

const router = express.Router();

//Register user

router.post("/register", register);

export { router as userRouter };
