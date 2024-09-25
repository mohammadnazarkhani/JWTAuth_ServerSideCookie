import { addUser } from "../models/Users.js";

// @desc    Get register page
// @route   GET /register
export const getRegister = (req, res) => {
  res.status(200).render("register");
};

// @desc    Post register data
// @route   POST /register
export const postRegister = async (req, res) => {
  const { username, email, password } = req.body;
  const userHasCreated = await addUser(username, email, password);

  if (!userHasCreated)
    return res.status(500).render("failedAction", {
      title: "Internale Error!",
      description: "Failed to register. Please, try again!",
    });

  res
    .status(200)
    .render("successfullAction", {
      title: "Successfully Registered!",
      description: `Welcome to out website ${username}.`,
    });
};
