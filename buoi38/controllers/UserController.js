const fs = require("fs");
const { v4: uuid } = require("uuid");
const model = require("../models/index");
const User = model.User;

module.exports = {
  index: async (req, res) => {
    let data = [];
    if (!fs.existsSync("./cache")) {
      fs.mkdir("./cache");
    }
    const value = uuid();
    const filePath = path.dirname(__dirname) + `/cache/${value}.json`;
    if (!req.cookies.usersCache) {
      data = User.findAll();
      fs.writeFileSync(filePath, JSON.stringify(data));
      req.cookie("usersCache", value, { maxAge: 9000000, httpOnly: true });
    } else {
      fs.readFile(filePath, "utf8", function (err, data) {
        if (err) throw err;
        const users = JSON.parse(data);
        res.send(users);
      });
    }
  },
};
