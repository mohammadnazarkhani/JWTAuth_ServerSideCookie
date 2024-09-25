// @desc    Get usermanagement page
// @route   GET /usermanagement
export const getUserMangement = (req, res) => {
  res.status(200).render("userMnagement");
};
