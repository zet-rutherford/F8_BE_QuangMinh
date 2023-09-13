const User = require("../models/user");
module.exports = {
  index: async (req, res) => {
    const user = await User;
    const userList = await user.findAll({
      attributes: ["id", "email", "encrypted_password"],
    });
    res.render("user/index", { userList });
  },
};
