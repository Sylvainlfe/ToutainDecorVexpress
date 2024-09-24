const multer = require("multer");

// Configuration de Multer pour utiliser diskStorage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Determine the destination based on the file's MIME type
    if (file.mimetype.startsWith("image/")) {
      cb(null, "public/assets/images/");
    } else {
      cb(new Error("Invalid file type"), null);
    }
  },
  filename: (req, file, cb) => {
    const date = Date.now();
    cb(null, `${date}-${file.originalname}`);
  },
});


module.exports = {storage};