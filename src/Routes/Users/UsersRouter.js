const { Router } = require("express");
const usersRouter = Router();
const getAllUsers = require("../../Controllers/Users/getAllUsers");
const getUserById = require("../../Controllers/Users/getUserById");
const getUserByUsername = require("../../Controllers/Users/getUserByUsername");
const getUserByEmailAndPassword = require("../../Controllers/Users/getUserByEmailAndPassword");
const createUser = require("../../Controllers/Users/createUser");
const updateUser = require("../../Controllers/Users/updateUser");
const deleteUser = require("../../Controllers/Users/deleteUser");

usersRouter.get("/", getAllUsers);  // ? OK

usersRouter.post("/", createUser);   // ? OK

usersRouter.get("/profile", getUserByUsername);   // ? OK

usersRouter.get("/:id", getUserById);   // ? OK

usersRouter.post("/login", getUserByEmailAndPassword);   // ? OK

usersRouter.put("/:id", updateUser);   // ? OK

usersRouter.delete("/:id", deleteUser);    // ? OK

module.exports = usersRouter;
