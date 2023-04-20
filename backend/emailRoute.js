const express = require("express");
const multer = require("multer");
const sendMail = require("./emailController");
const sendResume = require("./emailController");
const router = express.Router();
router.route("/").post(sendMail);

module.exports = router;
