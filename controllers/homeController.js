// @desc    Get home page
// @route   GET /
export const getHome = (req, res) => {
  res.status(200).render("index");
};
