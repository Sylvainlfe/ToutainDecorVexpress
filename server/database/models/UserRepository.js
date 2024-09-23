const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "users" });
  }

  async create(user) {
    const { email, password } = user;
    console.log('User data received:', user);
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, password) VALUES (?, ?)`,
      [email, password]
    );
    return result.insertId;
  }
}

module.exports = UserRepository;
