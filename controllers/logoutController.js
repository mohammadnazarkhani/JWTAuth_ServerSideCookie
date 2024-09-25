// @desc    Logout from website
// @route   POST /logout
export const getLogin = (req, res) => {
  res.clearCookie("token");
  res.status(200);
};
