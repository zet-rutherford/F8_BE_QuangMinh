const nodemailer = require("nodemailer");
class SendMail {
  constructor(job) {
    this.job = job;
  }

  handle = async () => {
    //Logic gửi email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "avadakedavraee2@gmail.com",
        pass: "dqyv wzaw fotk eknj",
      },
    });
    const info = await transporter.sendMail({
      from: `Quang Minh <avadakedavraee2@gmail.com>`, // sender address
      to: this.job.email, // list of receivers
      subject: `Xin chào: ${job.name}`, // Subject line
      html: `Xin chào bạn ${job.name}, tôi đang test email`,
    });
  };
}

module.exports = SendMail;
