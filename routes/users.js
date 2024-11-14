const express = require("express");
const router = express.Router();

const usersController = require("../controllers/users");

// to get all users
router.get("/", usersController.getAll);

// to get a single user
router.get("/:id", usersController.getSingle);

// to create a user
router.post("/", usersController.createUser);

// to update a user
router.put("/:id", usersController.updateUser);

// to delete a user
router.delete("/:id", usersController.deleteUser);

module.exports = router;