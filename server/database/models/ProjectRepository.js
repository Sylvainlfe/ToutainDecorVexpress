const AbstractRepository = require("./AbstractRepository");

class ProjectRepository extends AbstractRepository {
    constructor() {
        super({table: "project"});
    }

    async create(project) {
        const {title, location, description, thumbnail_url, photos_url} = project;
        const [result] = await this.database.query(
            `INSERT INTO ${this.table} (title, location, description, thumbnail_url, photos_url) VALUES (?,?,?,?,?)`,
            [title, location, description, thumbnail_url, JSON.stringify(photos_url)]
        );
        return result.insertId
    }
}

module.exports = ProjectRepository