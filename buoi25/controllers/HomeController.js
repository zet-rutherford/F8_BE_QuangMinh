const User = require("../models/User");
const { validationResult } = require("express-validator");
const validate = require("../utils/validate");


module.exports = {
  index: async (req, res) => {
    const { userLogin } = req.session;

    const user = await User;
    const userList = await user.findAll();
    const msg = req.flash('msg');

    res.render("index", { userLogin,msg, userList });
  },

  edit: (req, res)=>{
    const msg = req.flash("msg");
    const errors = req.flash("errors");
    const user = await User;
    const userData = await user.findOne({ where: { id: req.params.id } })
    // console.log(validate.getError(errors, "name"));
    res.render("home/edit", { msg, errors, validate });
  },
  store: async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      //Thêm dữ liệu
      const user = await User;
      const userEdit = await user.update({ name: req.body.name, email: req.body.email, status: req.body.status }, {
        where: {
          id: +req.params.id
        }
      })

     
      // console.log(req.body);
      req.flash("msg", "Sửa thông tin thành công");
      res.redirect("/");
    } else {
      req.flash("errors", errors.array());
      req.flash("msg", "Vui lòng nhập đầy đủ thông tin");
      res.redirect("/edit");
    }
  },

  delete: async (req, res) => {
    const user = await User;
    const userDelete = await user.destroy({
      where: {
        id: +req.params.id
      }
    });
    req.flash("msg", "Xóa thành công")
    res.redirect("/")
  }
};
