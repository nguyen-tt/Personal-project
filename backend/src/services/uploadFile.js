const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const postFile = (req, res, next) => {
  const { originalname } = req.file;
  const { filename } = req.file;
  const newFileName = `${uuidv4()}-${originalname}`;

  fs.rename(
    `./public/assets/images/${filename}`,
    `./public/assets/images/${newFileName}`,
    // eslint-disable-next-line consistent-return
    (err) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ error: "Error while renaming the file." });
      }
      req.body.img = newFileName;
      next();
    }
  );
};

module.exports = { postFile };
