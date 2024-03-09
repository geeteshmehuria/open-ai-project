const express = require("express");
const { connection } = require("./config/db");
const { UserRouter } = require("./routers/userRoutes");
const { JokesRouter } = require("./routers/jokesRouter");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/users", UserRouter);
app.use("/jokes", JokesRouter);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connected to db");
    console.log(`server started http://localhost:${process.env.PORT}`);
  } catch (error) {
    console.log("Error in connecting to the database ", error);
  }
});
