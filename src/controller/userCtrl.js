import Users from "../model/userModel.js";

export const register = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const newUser = new Users({
      userName,
      email,
      password,
    });

    await newUser.save();
    res.json({ msg: "register successful" });
  } catch (err) {
    console.log("errMsg: " + err);
    res.json({ message: "Internal error try again!" });
  }
};
