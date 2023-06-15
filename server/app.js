const express = require("express");
const path = require("path");
const cors = require("cors");
const volleyball = require("volleyball");
const app = express();

const { itemsRouter, usersRouter } = require("./api/index.js");

// json parser
app.use(express.json());
// static middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());
app.use(volleyball);

// mount routes
app.use("/api/items", itemsRouter);
app.use("/api/users", usersRouter);

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// app.listen(8080, ()=> {
//   console.log('server started')
// })

module.exports = app;
