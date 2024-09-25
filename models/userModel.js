import db from "../infrastructure/db.js";

// Define uthe schema
const userSchema = new db.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

// Create a modle based on the schema
const User = db.model("User", userSchema);

export default User;