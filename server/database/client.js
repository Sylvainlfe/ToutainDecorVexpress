const fs = require('fs');
const path = require('path');

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const mysql = require("mysql2/promise");

const client = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

client.checkConnection = () => {
  client
    .getConnection()
    .then((connection) => {
      console.info(`Using database ${DB_NAME}`);
      connection.release();
    })
    .catch((error) => {
      console.warn(
        "Warning:",
        "Failed to establish a database connection.",
        "Please check your database credentials in the .env file if you need a database access."
      );
      console.warn(error.message);
    });
};

client.initializeDatabase = async () => {
  try {
    const schema = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
    await client.query(schema);
    console.info('Database schema applied successfully.');
  } catch (error) {
    console.error('Error applying database schema:', error.message);
  }
};

client.databaseName = DB_NAME;

module.exports = client;