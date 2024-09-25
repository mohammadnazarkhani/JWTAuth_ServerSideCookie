// @desc    Get user profile
// @route   GET /profile
export const getProfile = (req, res) => {
  res.status(200).render("profile");
};
