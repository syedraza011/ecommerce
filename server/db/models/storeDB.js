const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("store", {
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: "users",
      key: "id",
    },
  },
  itemId: {
    type: Sequelize.INTEGER,
    references: {
      model: "items",
      key: "id",
    },
  },
});
