const express = require("express");

const Items = require("../db/models/itemDB");
const Users = require("../db/models/UserDB");

const itemsRouter = express.Router();
const usersRouter = express.Router();

// studentRouter.route("/").post(async (req, res) => {
//   const students = await Students.create(req.body);
//   console.log("student", students);
//   res.status(200).json({
//     success: true,
//     data: students,
//   });
// });

// Remove from users
usersRouter.route("/remove/:id").put(async (req, res) => {
  console.log("req.body", req.body);
  let updatedUser = await Users.findByPk(req.params.id);
  let updated = await updatedUser.update(req.body);

  res.status(200).json({
    success: true,
    data: updated,
  });
});
//paired
itemsRouter.route("/").get(async (req, res) => {
  const items = await Items.findAll();
  console.log("items", items);
  res.status(200).json({
    success: true,
    data: items,
  });
});

usersRouter.route("/").get(async (req, res) => {
  console.log("here i am");
  const users = await Users.findAll();
  console.log("users", users);
  res.status(200).json({
    success: true,
    data: users,
  });
});

// paired
itemsRouter.route("/:id").delete(async (req, res) => {
  console.log("req.body", req.body);

  const users = await Users.findAll({
    where: { itemId: req.params.id },
  });
  // users.forEach(async (user) => {
  //   let composedUser = { ...user, itemId: null };
  //   let updated = await user.update(composedUser);
  // });

  const toBDeleted = await Items.findByPk(req.params.id);
  const deleted = await toBDeleted.destroy();

  deleted
    ? res.status(200).json({
        success: true,
      })
    : res.status(400).json({
        success: false,
        message: "error",
      });
});

usersRouter.route("/:id").delete(async (req, res) => {
  console.log("req.body", req.body);

  //code above moved form here
  const users = await Users.findAll({
    where: { itemId: req.params.id },
  });
  users.forEach(async (user) => {
    let composedUser = { ...user, itemId: null };
    let updated = await user.update(composedUser);
  });

  const toBDeleted = await Users.findByPk(req.params.id);
  const deleted = await toBDeleted.destroy();

  deleted
    ? res.status(200).json({
        success: true,
      })
    : res.status(400).json({
        success: false,
        message: "error",
      });
});

//paired
itemsRouter.route("/").post(async (req, res) => {
  console.log("req.body", req.body);
  const newItem = await Items.create(req.body);
  console.log("newCampus", newCampus);
  res.status(200).json({
    success: true,
    data: newCampus,
  });
});

usersRouter.route("/").post(async (req, res) => {
  try {
    const newStudent = await Students.create(req.body);

    res.status(200).json({
      success: true,
      data: newStudent,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
});

//paired
itemsRouter.get("/:id", async (req, res) => {
  const campus = await Campuses.findByPk(req.params.id);
  console.log("campus", campus);
  res.status(200).json({
    success: true,
    data: campus,
  });
});

usersRouter.get("/:id", async (req, res) => {
  const singleStudent = await Students.findByPk(req.params.id);
  console.log("singleStudent", singleStudent);
  res.status(200).json({
    success: true,
    data: singleStudent,
  });
});

//paired
itemsRouter.put("/:id", async (req, res) => {
  const campus = await Campuses.findByPk(req.params.id);
  const updated = await campus.update(req.body);
  console.log("campus", campus);
  res.status(200).json({
    success: true,
    data: updated,
  });
});

usersRouter.put("/:id", async (req, res) => {
  const student = await Students.findByPk(req.params.id);
  const updated = await student.update(req.body);
  console.log("student in update", student);
  res.status(200).json({
    success: true,
    data: updated,
  });
});

module.exports = {
  itemsRouter,
  usersRouter,
};
