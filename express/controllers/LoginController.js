const { render } = require("ejs");
const Data = require("../data/data");
module.exports = {
  index: (req, res) => {
    return res.render("login");
  },
  handle: (req, res) => {
    const { email, password } = req.body;
    for (const index in Data) {
      if (Data[index].email === email && Data[index].password === password) {
        return res.render("profile");
      }
    }
  },
};
