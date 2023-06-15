//added to make conection between tabels or module
const db = require("./models/database");
const Users = require("./models/UserDB");
const Items = require("./models/itemDB");
const store = require("./models/storeDB");
store.hasMany(Items);
store.hasMany(Users);

module.exports = {
  Users,
  Items,
  store,
  db,
};
