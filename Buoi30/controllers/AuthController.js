const bcrypt = require("bcrypt");
const model = require("../models/index");
const { use } = require("passport");
const nodemailer = require("nodemailer");
const User = model.User;
let forgetEmail,code;

module.exports = {
    login: async (req, res) => {
        const msg = req.flash("error");
        const msgType = msg ? "danger" : "success";
        res.render("auth/login", { pageTitle: "Đăng nhập", msg, msgType });
      },
    handleLogin: async (req, res) => {
        res.redirect("/");
      },
    register: async (req, res) => {
        res.render("auth/register", { pageTitle: "Đăng ký" });
      },
    
    handleRegister: async (req, res) => {
        const { name, email, password } = req.body;
    
        const salt = 10;
        bcrypt.hash(password, salt, async function (err, hash) {
          //Insert name, email, password (hash) vào DB => Hoàn thiện phần đăng ký
    
          const data = await User.create({
            name,
            email,
            password: hash,
          });
    
          if (data) {
            req.flash("msg", "Đăng ký tài khoản thành công");
            res.redirect("/auth/login");
            return;
          }
    
          req.flash("msg", "Vui lòng kiểm tra lại thông tin");
          res.redirect("/auth/register");
        });
        return;
      },
    logout: (req, res, next) => {
        req.logout(function (err) {
          if (err) {
            return next(err);
          }
          res.redirect("/auth/login");
        });
      },
    forget: async(req, res)=>{
        const msg = req.flash("msg")
        res.render("auth/forget",{msg})
    },
    forgetEmail: async(req,res)=>{
      var {email} = req.body;
      forgetEmail = email;
      console.log(email);
      const user = await model.User.findOne({
        where:{
          email,
        }
      });
      console.log(user);
      if (!user){
        req.flash('msg',"email khoong toonf taij");
        res.redirect("/auth/forget");
      } else {
        //tạo mã xác thực 6 chữ số
        function generateVerifyCode() {
          let code = '';
          for (let i = 0; i < 6; i++) {
            
            code += Math.floor(Math.random() * 10); 
          }
          return code;
        }
        var verifyCode = generateVerifyCode();
        console.log(verifyCode);
        code = verifyCode
        await model.User.update({
          verify: verifyCode,
        },
        {
          where: {email,}
        })
        res.redirect("/auth/verify")
      };
      },
      verify: async(req,res)=>{
        console.log(forgetEmail);
         //gửi mã xác nhận đến email
         const transporter = nodemailer.createTransport({
          host: process.env.MAIL_HOST,
          port: process.env.MAIL_PORT,
          secure: process.env.MAIL_SECURE,
          auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
          },
        });
        const info = await transporter.sendMail({
          from: `<${process.env.MAIL_FROM}>`, // sender address
          to: forgetEmail,
          subject: "Nhập mã xác nhận", // Subject line
          html: `${code} là mã xác nhận của bạn. Vui lòng không chia sẻ cho bất kỳ ai. Mã hiệu lực trong vòng 15 phút`,
        });
        console.log(info);
        // console.log(email);
        res.render("auth/verify",{forgetEmail,msg});
      },
      handleVerify: async(req,res)=>{
        const {verifyCode} = req.body;
        if (code !== verifyCode) {
          req.flash('msg',"Max xasc nhajan khoong howjp leej");
          res.redirect("/auth/verify");
        } else {
          res.redirect("/auth/reset")
        }
      },
      reset: async(req,res)=>{
        res.render("auth/reset",{forgetEmail,msg})
      },
      handleReset: async(req,res)=>{
        const {password,password2} = req.body;
        if (password !==password2) {
          req.flash("msg", "Mật khẩu không khớp");
          res.redirect("/auth/reset/");
        } else {
          bcrypt.hash(password, salt, async function (err, hash) {
            const value = await User.update(
              { password: hash },
              {
                where: {
                  verify: verifyCode,
                },
              }
            );
            if (value) {
              req.flash("msg", "Cập nhập mật khẩu thành công!");
              res.redirect("/auth/login");
        }
      });
    }
  },
}
