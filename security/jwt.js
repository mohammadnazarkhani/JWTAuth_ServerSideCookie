import jwt from "jsonwebtoken";

// Get needed envs
const secretKey = process.env.JWT_SECRET_KEY || "secretKey";
const expDuration = process.env.JWT_EXPIRES_IN || "24h";

// @desc    Utitlity function to generate JWT token
export const generateToken = (user) => {
  return jwt.sign({ username: user.username, role: user.role }, secretKey, {
    expiresIn: expDuration,
  });
};
