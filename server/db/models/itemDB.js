const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("items", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      "/Users/jugnoo/Desktop/JPFP/jpfp-template-V2-a/public/CUNY.jpg",
  },
  cost: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  
  description: {
    type: Sequelize.TEXT,
  },
});
