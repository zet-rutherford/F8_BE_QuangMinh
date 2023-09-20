const User = require("../models/User");
const md5 = require("md5");

module.exports = {
  index: async (req, res) => {
    const msg = req.flash("msg");

    res.render("auth/login", { msg });
  },

  handeLogin: async (req, res) => {
    const { email, password, acc_status } = req.body;
    const user = await User.findOne({
      where: { email, password: md5(password), },
    });

    if (user?.dataValues) {
      //login success
      req.session.userLogin = user.dataValues;
    }
    else {
      //login failed
      req.flash("msg", "Email hoặc mật khẩu không chính xác");
    }

    res.redirect("/auth/login");
  },

  logout: (req, res) => {
    req.session.destroy();
    res.redirect("/auth/login");
  },
  register: (req, res)=>{
    const msg = req.flash("msg")
    res.render('auth/register',{msg});
  },
  handleRegister: async (req, res)=>{
    const {name, email, password, password2 } = req.body;
    const user = await User.findOne({
      where: { email }
    });
    console.log(password, password2);
    if (user) {
      req.flash('msg','Email da ton tai');
      return res.redirect('/auth/register');
    }
    // console.log(user);
    if(password!==password2){
      req.flash("msg","Mat khau khong trung khop");
      return res.redirect('/auth/register');
    }
    
    const newUser = await User.create(
      {
        name, email, password:md5(password), acc_status: 0,
      }
    )
    if (newUser) {
      req.flash("msg","Mày đã đăng ký thành công");
      return res.redirect('/auth/register');
    }
  }
};
