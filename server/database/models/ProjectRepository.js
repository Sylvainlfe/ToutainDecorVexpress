const AbstractRepository = require("./AbstractRepository");

class ProjectRepository extends AbstractRepository {
    constructor() {
        super({table: "project"});
    }

    async create(project) {
        const connection = await this.database.getConnection();
      
        try {
          await connection.beginTransaction();
      
          const { title, location, description, thumbnail_url, photos_url } = project;
      
          if (!title) {
            throw new Error("Le titre du projet ne peut pas être vide");
          }
      
          const [result] = await connection.query(
            `INSERT INTO ${this.table} (title, location, description, thumbnail_url, photos_url) VALUES (?,?,?,?,?)`,
            [title, location, description, thumbnail_url, JSON.stringify(photos_url)]
          );
      
          await connection.commit();
          return result.insertId;
        } catch (error) {
          await connection.rollback();
          throw error;
        } finally {
          connection.release();
        }
      }
}

module.exports = ProjectRepository;