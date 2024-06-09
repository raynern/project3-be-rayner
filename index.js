const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const db = require("./db/models/index.js");
const { user, transaction, category } = db;

const UserRouter = require("./routers/UserRouter.js");
const UserController = require("./controllers/UserController.js");

const TransactionRouter = require("./routers/TransactionRouter.js");
const TransactionController = require("./controllers/TransactionController.js");

const PORT = 3000;
const app = express();

const userController = new UserController(user);
const userRouter = new UserRouter(express, userController).routes();

const transactionController = new TransactionController(transaction);
const transactionRouter = new TransactionRouter(
  express,
  transactionController
).routes();

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.use("/transactions", transactionRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
