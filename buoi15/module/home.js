const Base = require("../core/base");
const Session = require("../core/session");
class Home extends Base {
  index = (req, res) => {
    this.render(req, res, "home");
  };
}

module.exports = new Home();