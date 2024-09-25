import { fetchUserByUsername } from "../models/Users.js";

// @desc    Middleware to authorize users by role
const authorizeRoles = (allowedRoles) => {
  return async (req, res, next) => {
    const username = req.user.username;
    const user = await fetchUserByUsername(username);
    const userRole = user.role;

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).render("failedAction", {
        title: "Access Denied!",
        description: `You need to be a ${allowedRoles.join(
          ", "
        )} to access this page.`,
      });
    }
    next();
  };
};

export default authorizeRoles;
