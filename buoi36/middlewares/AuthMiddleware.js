const jwt = require("jsonwebtoken");

const model = require("../models/index");
const User = model.User;

const { JWT_SECRET } = process.env;

module.exports = {
  async verifyToken(req, res, next) {
    const authorization = req.headers["authorization"];

    try {
      const token = authorization.replace("Bearer", "").trim();
      const decoded = jwt.verify(token, JWT_SECRET);
      const { userId } = decoded.data;
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(401).json({
          status: "Error",
          message: "Authorization Failed",
        });
      } else {
        req.body.userId = userId;
        next();
      }
    } catch (error) {
      res.status(403).json({
        status: "Error",
        error,
      });
    }
  },
};
