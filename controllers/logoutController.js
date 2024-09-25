// @desc    Logout from website
// @route   POST /logout
export const postLogout = (req, res) => {
  res.clearCookie("token");
  res.status(200);
};
