const tables = require("../../database/tables");

const add = async (req, res, next) => {
    try {
        const { title, location, description } = req.body;
        let thumbnail_url = null;
        let photos_url = [];

        if (req.files && req.files['thumbnail_url']) {
            thumbnail_url = req.files['thumbnail_url'][0].path;
        }

        if (req.files && req.files['photos_url']) {
            photos_url = req.files['photos_url'].map(file => file.path);
        }

        const project = {
            title,
            location,
            description,
            thumbnail_url,
            photos_url
        };

        const insertId = await tables.project.create(project);

        res.status(201).json({ insertId });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    add
}