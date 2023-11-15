const model = require("../models/index");
const LoginToken = model.LoginToken;
const token = require("../utils/token");
module.exports = {
  login: (req, res) => {
    const { redirect } = req.query;
    res.render("auth/login", { redirect });
  },
  handleLogin: async (req, res, next) => {
    let userToken = await LoginToken.findOne({
      where: { userId: req.user.id },
    });
    // console.log(req.user.id);
    // console.log(userToken);
    if (!userToken) {
      newToken = token.createToken();
      userToken = await LoginToken.create({
        userId: req.user.id,
        token: newToken,
      });
      res.cookie("token", newToken);
      next();
      // return;
    }
    //neu co token
    await LoginToken.destroy({ where: { userId: req.user.id } });
    newToken = token.createToken();
    await LoginToken.create({ userId: req.user.id, token: newToken });
    res.cookie("token", newToken);
    next();
    // return;
  },
};
