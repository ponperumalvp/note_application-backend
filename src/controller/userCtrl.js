import Users from "../model/userModel.js";

export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const newUser = new Users({
      userName: userName,
      email: email,
      password: password,
    });
    console.log(newUser);

    await newUser.save();
    res.json({ msg: "register successful", userId: newUser._id });
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
    const passwordVerify = await Users.findOne({ password });
    if (!passwordVerify) {
      return res.json({ message: "Invalid credentials" });
    }
    res.json({
      msg: "login successful",
      userId: user._id,
    });
  } catch (err) {
    console.log(" login errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
