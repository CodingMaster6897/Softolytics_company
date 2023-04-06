const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const nodemailer = require("nodemailer");
const emailRoute = require("./emailRoute");
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
app.use(cors());
app.use("/send", emailRoute);
