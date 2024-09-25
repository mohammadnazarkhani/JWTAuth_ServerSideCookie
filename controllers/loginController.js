import { findUserByUsername } from "../models/Users.js";
import { checkPassowrd } from "../security/passwordHasher.js";
import { generateToken } from "../security/jwt.js";

// @desc    Get login page
// @route   GET /login
export const getLogin = (req, res) => {
  res.status(200).render("login");
};

// @desc    Post login data
// @route   POST /login
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = findUserByUsername(username);

  if (!user) {
    return res.status(401).render("failedAction", {
      title: "Login failed!",
      description: "Invalid username or password",
    });
  }

  // Verify the password
  const validPassword = await checkPassowrd(password, user.password);
  if (!validPassword)
    return res.status(401).render("failedAction", {
      title: "Login failed!",
      description: "Invalid username or password",
    });

  // Generate JWT token
  const token = generateToken(user);

  // Store jwt in an HTTP-only cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    maxAge: 2592000000,
  });

  res.status(200).render("successfullAct", {
    title: "Loged in successfully!",
    description: `Hi ${user.username}! welcome to website.`,
  });
};
