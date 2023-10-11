//xử lý đăng nhập thông qua mạng xã hội
const GoogleStrategy = require("passport-google-oidc");
const model = require("../models/index");
const Provider = model.Provider;
const User = model.User;

module.exports = new GoogleStrategy(
  {
    clientID: process.env["GOOGLE_CLIENT_ID"],
    clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
    callbackURL: "http://localhost:3000/auth/google/callback",
    scope: ["profile", "email"],
  },
  async (issuer, profile, done) => {
    console.log(profile);
    const { displayName, emails } = profile;
    const [{ value: email }] = emails;
    console.log(displayName, email);

    console.log(issuer);
    const provider = "google"; // kiểm tra trong table providers có Provider hay chưa
    let providerDetail = await Provider.findOne({
      where: {
        name: provider,
      },
    });
    //insert nếu không có hoặc lấy id nếu đã có
    let providerId;
    if (!providerDetail) {
      providerDetail = await Provider.create({
        name: provider,
      });
    }
    providerId = providerDetail.id;
    //kieerm tra xem trong bảng có users với provider_id chưa
    let user = await User.findOne({
      where: {
        email,
        provider_id: providerId,
      },
    });
    //chua co thi insert vao, co roi thi lay ra
    if (!user) {
      user = await User.create({
        name: displayName,
        email,
        provider_id: providerId,
      });
    }
    return done(null, user);
  }
);
