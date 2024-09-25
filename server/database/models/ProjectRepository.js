const AbstractRepository = require("./AbstractRepository");

class ProjectRepository extends AbstractRepository {
    constructor() {
        super({table: "project"});
    }
    async readAll() {
        const connection = await this.database.getConnection();
        try {
            const [rows] = await connection.query(`SELECT * FROM ${this.table}`);
            return rows;
        } catch (error) {
            console.error('Erreur lors de la récupération de tous les projets:', error);
            throw error;
        } finally {
            connection.release();
        }
    }

    async delete(id) {
        const connection = await this.database.getConnection();
        try {
          await connection.beginTransaction();
          const [project] = await connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);
          if (project.length === 0) {
            throw new Error("Projet non trouvé");
          }
          await connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
          await connection.commit();
          
          // Parse photos_url if it's a string
          if (typeof project[0].photos_url === 'string') {
            project[0].photos_url = JSON.parse(project[0].photos_url);
          }
          
          return project[0];
        } catch (error) {
          await connection.rollback();
          throw error;
        } finally {
          connection.release();
        }
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