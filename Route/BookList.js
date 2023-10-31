const express = require("express");
const router = express.Router();
const user = require("../models/books");

router.get("/list", async (req, res) => {
  try {
    const allBooks = await user.find();
    res.json({
      status: "success",
      data: allBooks,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "Internal Server error",
    });
  }
});

module.exports = router;
