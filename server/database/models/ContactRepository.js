const AbstractRepository = require("./AbstractRepository");

class ContactRepository extends AbstractRepository {
    constructor() {
        super({table : "contact"})
    }

    async create(contact) {
        const {firstname, lastname, email, phone, location, comment} = contact;
        const [result] = await this.database.query(
            `INSERT INTO ${this.table} (firstname, lastname, email, phone, location, comment) VALUES (?,?,?,?,?,?)`,
            [firstname, lastname, email, phone, location, comment]
        );
        return result.insertId
    }
    async findContactByEmail(email) {
        const [rows] = await this.database.query(
            `SELECT * FROM ${this.table} WHERE email = ?`,
            [email]
        );
        return rows[0];
    }
}

module.exports = ContactRepository