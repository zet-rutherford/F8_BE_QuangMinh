const multer = require("multer");
const path = require("path");

const model = require("../../models/index");
const File = model.File;

module.exports = {
  index: async (req, res) => {
    const { userId } = req.body;
    try {
      const userLink = await File.findAll({
        where: {
          userId,
        },
      });
      if (userLink) {
        return res.status(200).json({ userLink });
      } else {
        res.status(400).json({
          status: "Error",
          message: "Invalid User",
        });
      }
    } catch (error) {
      return res.status(500).json({ status: "Error", error });
    }
  },
  upload: async (req, res) => {
    const { userId } = req.body;
    const storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, "uploads/");
      },
      filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
      },
    });
    const upload = multer({ storage: storage });
    upload.single("file")(req, res, async (err) => {
      if (err) {
        req.status(400).json({ error: err });
      } else {
        if (req.file) {
          const fileLink = `http://localhost:3000/upload/${req.file.filename}`;
          const addLink = await File.create({
            url: fileLink,
            user_id: userId,
          });
          res.json({
            status: "sucess",
            data: addLink,
          });
        } else {
          res.status(400).json({ status: "Error", error: "No file uploaded" });
        }
      }
    });
  },
  send: (req, res) => {
    const { fileName } = req.params;
    console.log(fileName);
    res.sendFile(`uploads/${fileName}`);
  },
};
