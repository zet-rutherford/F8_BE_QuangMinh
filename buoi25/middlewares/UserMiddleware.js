const { check } = require("express-validator");
const User = require("../models/User");

module.exports = () => {
  return [
    check("name", "Tên bắt buộc phải nhập").notEmpty(),
    check("name", "Tên phải từ 5 ký tự trở lên").isLength({ min: 5 }),
    check("email", "Email bắt buộc phải nhập").notEmpty(),
    check("email", "Email không đúng định dạng").isEmail(),
    check("email").custom(async (emailVal) => {
      //Truy vấn database
      const user = await User;
      const userData = await user.findOne({
        where: {
          email: emailVal,
        },
      });
      if (userData) {
        throw new Error("Email đã có người sử dụng");
      }
    }),
  ];
};