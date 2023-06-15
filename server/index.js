const { db } = require("./db/index");
const port = process.env.PORT || 3000;

const app = require("./app");

// db.sync().then(() => {
//   console.log("db synced");
//   app.listen(port, () => console.log(`listening on port ${port}`));
// });

// const { db } = require("./db/index");
const { green, red } = require("chalk");
const User = require("./db/models/UserDB");
const Item = require("./db/models/itemDB");
// seed my Dummy database here!
const Users = [
  {
    userName: "Mohammed",
    userPassword: "123456",
    email: "mali@gmail.com",
  },
  {
    userName: "Moe",
    userPassword: "123456",
    email: "mali@gmail.com",
  },
  {
    userName: "Moe",
    userPassword: "123456",
    email: "mali@gmail.com",
  },
];

const Items = [
  {
    name: "Milk",
    imageUrl: "https://products.advanced-online.com/CUY/site2020/logo.png",
    cost: 50,
    price: 5,
    quantity: 100,
    description: "alot of protien",
  },
  {
    name: "Dairy Milk",
    imageUrl: "https://products.advanced-online.com/CUY/site2020/logo.png",
    cost: 50,
    price: 5,
    quantity: 100,
    description: "alot of protien",
  },
  {
    name: "Dark Chocolate",
    imageUrl: "https://products.advanced-online.com/CUY/site2020/logo.png",
    cost: 50,
    price: 5,
    quantity: 100,
    description: "alot of protien",
  },
  {
    name: "yoGurt",
    imageUrl: "https://products.advanced-online.com/CUY/site2020/logo.png",
    cost: 50,
    price: 5,
    quantity: 100,
    description: "alot of protien",
  },
];

const seed = async () => {
  await db.sync({ force: true });
  await Promise.all(
    Items.map((item) => {
      return Item.create(item);
    })
  );

  await Promise.all(
    Users.map((user) => {
      return User.create(user);
    })
  );

  console.log(green("Seeding success!"));
  console.log("db synced");
  app.listen(port, () => console.log(`listening on port ${port}`));
  // db.close();
};

seed().catch((err) => {
  console.error(red("Oh noes! Something went wrong!"));
  console.error(err);
  db.close();
});
