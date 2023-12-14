import Users from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const user = await Users.findOne({ email });

    console.log("foundUser:", user);

    if (user) {
      return res.json({ message: "user already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      userName: userName,
      email: email,
      password: hashPassword,
    });
    console.log(newUser);

    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY);

    res.json({ message: "register successful", userId: newUser._id, token });
  } catch (err) {
    console.log("errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    const user = await Users.findOne({ email });
    if (!user) {
      return res.json({ message: "User not Found" });
    }
    const passwordVerify = await bcrypt.compare(password, user.password);
    if (!passwordVerify) {
      return res.json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);
    console.log("token:", token);
    res.json({
      userId: user._id,
      token,
      message: "login successful",
    });
  } catch (err) {
    console.log(" login errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
