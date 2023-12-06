import express from "express";

import { register, login } from "../controller/userCtrl.js";

const router = express.Router();

//Register user

router.post("/register", register);
router.post("/login", login);

export { router as userRouter };
