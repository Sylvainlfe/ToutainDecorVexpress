const AbstractRepository = require("./AbstractRepository");

class UserRepository extends AbstractRepository {
  constructor() {
    super({ table: "user" });
  }

  async create(user) {
    const { email, hashedPassword } = user;
    console.log('User data received:', user);
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (email, password) VALUES (?, ?)`,
      [email, hashedPassword]
    );
    return result.insertId;
  }
}

module.exports = UserRepository;
