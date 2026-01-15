const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Mini Mart Backend is running");
});

router.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Beer", price: 2.5 },
    { id: 2, name: "Wine", price: 6.5 },
    { id: 3, name: "Snack", price: 3.0 },
    { id: 3, name: "Fruits", price: 3.0 },
  ]);
});

module.exports = router;
