module.exports = (req, res, next) => {
  if (req.session.isAuth) {
    next();
  }

  res.redirect("/dang-nhap");
};
