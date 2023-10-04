const nodemailer = require("nodemailer");
const model = require("../models/index");


module.exports = {
    index: (req,res)=>{
        const msg = req.flash("msg");
        res.render("email/send", {msg});
    },
    handleSend: async (req, res)=>{
        const {email,title,content} = req.body;
        console.log(email, title, content);

        //ghi vào database
        const userEmail = await model.email_list;
        userEmail.create(req.body);

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
            to: email,
            subject: title, // Subject line
            html: content,
          });
          console.log(info);
        
        req.flash("msg", "Đã gửi thành công email");
        res.redirect("./send");
    },
    getList: async(req,res)=>{
        const userEmail = await model.email_list;
        const emailList = await userEmail.findAll();

        res.render("email/history",{emailList})
    },
    getDetail: async(req,res)=>{
      const { id } = req.params;
      // const userEmail = await model.Mail;
      // const emailDetail = await userEmail.findByPk(id);
      // const emailAddress = emailDetail.dataValues.email;
      // const emailTitle = emailDetail.dataValues.title;
      // const emailContent = emailDetail.dataValues.content;
      const userEmail = await model.email_list;
      const emailData = await userEmail.findByPk(id);

      const emailReciver = emailData.dataValues.email;
      const emailTitle = emailData.dataValues.title;
      const emailStatus = emailData.dataValues.status;
      const emailContent = emailData.dataValues.content

      res.render("email/detail",{emailContent,emailStatus,emailTitle,emailReciver});
    }

}