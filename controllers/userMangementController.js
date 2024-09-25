// @desc    Get usermanagement page
// @route   GET /usermanagement
export const getProfile = (req, res) => {
  res.status(200).render("userMnagement");
};
