// @desc    Middleware to authorize users by role
const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).render("failedAction", {
        title: "Access Denied!",
        description: `You need to be a ${allowedRoles} to access this page.`,
      });
    }
    next();
  };
};

export default authorizeRoles;
