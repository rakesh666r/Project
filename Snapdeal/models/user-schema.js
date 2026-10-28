import { Schema, model } from "mongoose";

const userSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user", enum: ["user", "seller", "admin"] },
});

const UserSchema = model("user", userSchema);

export default userSchema;