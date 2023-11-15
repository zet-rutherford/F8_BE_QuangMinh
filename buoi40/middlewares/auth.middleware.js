const model = require("../models/index");
const LoginToken = model.LoginToken;

module.exports = async (req, res, next) => {
  if (!req.user) {
    res.redirect("/auth/login");
  }
  next();
  const userCookie = req.cookies;
  console.log(req.user.id);
  const userToken = await LoginToken.findOne({
    where: { userId: req.user.id },
  });
  console.log(userToken.token);
  console.log(userCookie.token);
  if (userToken.token === userCookie.token) {
    next();
  } else {
    req.logout((err) => {
      if (err) {
        next();
      }
      res.redirect("/auth/login");
    });
  }
};
