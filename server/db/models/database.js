const Sequelize = require("sequelize");
// const
require(`dotenv`).config();

const db = new Sequelize("postgres://localhost:5432/ecomerce", {
  logging: false,
});
// const db = new Sequelize(process.env.DATABASE_URL, {
//   logging: false,

// });

module.exports = db;
