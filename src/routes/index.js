const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("layout", { title: "Home", content: "home" });
});

module.exports = router;
