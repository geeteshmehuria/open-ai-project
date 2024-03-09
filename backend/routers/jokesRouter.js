const express = require("express");
// const { register, login, logout } = require("../controllers/userController");
const { auth } = require("../middleware/authMiddleware");
const {
  createJokes,
  getJokes,
  deleteJokes,
  generate,
} = require("../controllers/jokesController");

const JokesRouter = express.Router();

JokesRouter.post("/", auth, createJokes);
JokesRouter.get("/", auth, getJokes);
JokesRouter.delete("/", auth, deleteJokes);
JokesRouter.get("/:items", auth, generate);

module.exports = { JokesRouter };
