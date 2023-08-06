const Render = require("./src/render/Render");
const fs = require("fs");
class Data extends Render {
  index = (req, res) => {
    const name = "Mạnh";
    const desc = "ABC";
    const address = ["aaa", "aa", "ha noi", "viet nam"];
    const contact = {
      office: "123",
      phone: "0123456789",
      email: "manh@gmail.com",
    };
    const profile = ["facebook", "zalo", "insta", "github", "youtube"];
    this.render(req, res, { name, desc, address, contact, profile });
  };
}

module.exports = new Data();
