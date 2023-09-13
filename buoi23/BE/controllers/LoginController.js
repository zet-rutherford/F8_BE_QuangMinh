const User = require("../models/user");
const crypto = require("crypto");

module.exports = {
  showForm: (req, res) => {
    const errors = req.flash("errors")[0];

    const msg = req.flash("msg")[0];
    const msgType = req.flash("msg_type")[0];

    return res.render("auth/login", {
      errors,
      msg,
      msgType,
    });
  },

  login: async (req, res) => {
    const user = await User;
    const userList = await user.findAll({
      attributes: ["id", "email", "password"],
    });

    const email_data = [];
    const password_data = [];

    userList.forEach((user) => {
      const { email: userEmail, password: userPassword } = user.dataValues;
      email_data.push(userEmail);
      password_data.push(userPassword);
    });
    console.log(email_data, password_data);

    const { email, password } = req.body;
    const errors = {};

    if (!email) {
      errors.email = "Vui lòng nhập email";
    }

    if (!password) {
      errors.password = "Vui lòng nhập mật khẩu";
    }

    if (Object.keys(errors).length) {
      req.flash("errors", errors);
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
    } else {
      const index = email_data.findIndex((e) => e === email);
      if (index !== -1 && password_data[index] === password) {
        req.session.isAuth = true;
        req.session.user = {
          email: email_data[index],
        };
      } else {
        req.flash("msg", "Email hoặc mật khẩu không chính xác");
      }
    }

    return res.redirect("/dang-nhap");
  },
  logout: (req, res) => {
    delete req.session.isAuth;
    delete req.session.user;
    req.flash("msg", "Đăng xuất thành công");
    req.flash("msg_type", "success");
    res.redirect("/dang-nhap");
  },
};
