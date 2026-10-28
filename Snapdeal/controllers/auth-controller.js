import userSchema from "../models/user-schema.js";

export const registerController = async (req, res) => {
  try {

    const { name, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
      return res.status(404).json({ success: false, message: "All feilds required" });
    }

    const isEmailExist = await userSchema.findOne({ email: email });
    if (isEmailExist) {
      return res
        .status(404)
        .json({ success: false, message: "Email is already exists" });
    }

    const newUser = await userSchema.create({ name, email, password, role });
    console.log(newUser, "newuser");


    return res
      .status(201)
      .json({ success: true, message: "Registered Succefully" });
  } catch (error) {
    return res.status(500).json({ error, success: false });
  }
};
 