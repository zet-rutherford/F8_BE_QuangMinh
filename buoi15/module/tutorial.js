const Base = require("../core/base");
const Session = require("../core/session");
class Tutorial extends Base {
  index = (req, res) => {
    this.render(req, res, "tutorial");
  };
}

module.exports = new Tutorial();