module.exports = {
  index: (req, res) => {
    res.render("pages/index", { layout: "layouts/layout" });
  },
};
