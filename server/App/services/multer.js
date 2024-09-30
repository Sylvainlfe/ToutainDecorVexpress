const multer = require("multer");
const path = require("path");
const fs = require("fs").promises;

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

const deleteFiles = async (files) => {
  for (const file of files) {
    const filePath = path.join(__dirname, '../../public/assets/images', file);
    try {
      await fs.unlink(filePath);
    } catch (error) {
      console.error(`Erreur lors de la suppression du fichier ${file}:`, error);
    }
  }
};

const deleteProjectFiles = async (req, res, next) => {
  try {
    if (req.project) {
      const filesToDelete = [];
      if (req.project.thumbnail_url) {
        filesToDelete.push(req.project.thumbnail_url);
      }
      if (req.project.photos_url) {
        // Vérifiez si photos_url est déjà un tableau, sinon parsez-le
        const photosArray = Array.isArray(req.project.photos_url) 
          ? req.project.photos_url 
          : JSON.parse(req.project.photos_url);
        filesToDelete.push(...photosArray);
      }
      await deleteFiles(filesToDelete);
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  upload,
  formatThumbnail,
  formatPhotos,
  deleteProjectFiles,
  deleteFiles,
};