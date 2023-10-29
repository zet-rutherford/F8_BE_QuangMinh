const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const model = require("../../models/index");
const User = model.User;

const saltRounds = 10;

module.exports = {
  register: async (req, res) => {
    const { name, email, password } = req.body;
    if (!email && !password && !name) {
      return res.status(400).json({
        status: "error",
        message: "Email, password and name is required",
      });
    }

    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });

      if (user) {
        return res.status(409).json({
          status: "Error",
          message: "Email is available",
        });
      }

      const hashPassword = bcrypt.hashSync(password, saltRounds);

      const newUser = await User.create({
        name: name,
        email: email,
        password: hashPassword,
      });

      res.status(201).json({
        stautus: "Success",
        data: newUser,
      });
    } catch (error) {
      return res.status(500).json({
        status: "Error",
        error,
      });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        status: "error",
        message: "Email and password is required",
      });
      return;
    }
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(400).json({
        status: "error",
        message: "Wrong account or password",
      });
      return;
    }
    const { password: hash } = user;
    const status = bcrypt.compareSync(password, hash);
    if (!status) {
      res.status(400).json({
        status: "error",
        message: "Wrong account or password",
      });
      return;
    }

    const { JWT_SECRET, JWT_EXPIRE } = process.env;

    const token = jwt.sign(
      {
        data: {
          userId: user.id,
        },
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRE * 60 }
    );

    res.json({
      status: "success",
      accessToken: token,
    });
  },
};
