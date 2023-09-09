const Base = require("../core/base");
const Session = require("../core/session");
const fs = require("fs");
class Auth extends Base {
  login = (req, res) => {
    const session = new Session(req, res);
    this.render(req, res, "app");
  };
}

module.exports = new Auth();