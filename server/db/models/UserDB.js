const Sequelize = require("sequelize");
const db = require("./database");

module.exports = db.define("users", {
  name: {
    type: Sequelize.STRING,
    
  },
  password: {
    type: Sequelize.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    // validate: {
    //   notEmpty: false,
    //   isEmail: false,
    // },
  },
  // imageUrl: {
  //   type: Sequelize.STRING,
  //   defaultValue: "default",
  // },
  // gpa: {
  //   type: Sequelize.FLOAT,
  //   validate: {
  //     min: 0.0,
  //     max: 4.0,
  //   },
  // },
  // campusId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: "campuses",
  //     key: "id",
  //   },
  // },
});
