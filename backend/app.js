const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(require("cors")());

// static files
app.use(express.static(path.join(__dirname, "public")));

// routes
app.use("/", require("./routes/index"));

app.listen(PORT, () => {
  console.log(`Mini Mart running on http://localhost:${PORT}`);
});
