const express = require("express");
const router = express.Router();
const User = require("../models/books");

router.post("/addBook", async (req, res) => {
  try {
    const { title, Author, Summary } = req.body;
    const user = new User({
      title: title,
      Author: Author,
      Summary: Summary,
    });
    await user.save();
    return res.json({
      status: "success",
      message: "Successfully saved data",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      error: "internal server error",
    });
  }
});

module.exports = router;
