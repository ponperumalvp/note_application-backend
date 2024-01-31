import Users from "../model/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const user = await Users.findOne({ email });

    if (user) {
      return res.json({ message: "user already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new Users({
      userName: userName,
      email: email,
      password: hashPassword,
    });

    await newUser.save();
    const token = await jwt.sign(
      { id: newUser._id },
      process.env.JWT_SECRET_KEY
    );

    res.json({
      message: "register successful",
      userId: newUser._id,
      token,
      userName,
    });
  } catch (err) {
    console.log("errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Users.findOne({ email });
    if (!user) {
      return res.json({ message: "User not Found" });
    }
    const passwordVerify = await bcrypt.compare(password, user.password);
    if (!passwordVerify) {
      return res.json({ message: "Invalid credentials" });
    }
    const token = await jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    res.json({
      userId: user._id,
      userName: user.userName,
      token,
      message: "login successful",
    });
  } catch (err) {
    console.log(" login errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
