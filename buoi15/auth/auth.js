const Base = require("../core/base");
const Session = require("../core/session");

class Auth extends Base {
  login = (req, res) => {
    const session = new Session(req, res);

    res.end("Login");
  };
}

module.exports = new Auth();