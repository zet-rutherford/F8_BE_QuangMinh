module.exports = {
  login: async (req, res) => {
    res.render("auth/login", { layout: "layouts/auth_layout" });
  },
  logout: (req, res, next) => {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect("/auth/login");
    });
  },
};
