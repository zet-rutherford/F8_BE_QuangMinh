const { render } = require("ejs");
module.exports = {
  index: (req, res) => {
    return res.render("/login");
  },
};
