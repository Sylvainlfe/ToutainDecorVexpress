const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, "public/assets/images/");
    } else {
      cb(new Error("Invalid file type"), null);
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only images are allowed!"), false);
  }
};

const upload = multer({ 
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  }
});

const formatThumbnail = (req, res, next) => {
  if (req.files && req.files['thumbnail_url']) {
    const image = req.files['thumbnail_url'][0];
    req.body.thumbnail_url = image.filename;
    next();
  } else {
    next();
  }
};

const formatPhotos = (req, res, next) => {
  if (req.files && req.files['photos_url']) {
    req.body.photos_url = req.files['photos_url'].map(file => file.filename);
    next();
  } else {
    next();
  }
};

module.exports = {
  upload,
  formatThumbnail,
  formatPhotos,
};