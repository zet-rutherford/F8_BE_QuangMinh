const { rateLimit } = require("express-rate-limit");

module.exports = {
  limit: rateLimit({
    windowMs: 60 * 1000 * 15,
    max: 100,
    message: "Too many requests from this IP, try again after 15 minutes",
  }),
};
