const express = require("express");
const path = require("path");

const app = express();

// Importing routes
const indexRouter = require("./routes/index");

// Setting up the view engine and public directory
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("public"));


app.use("/", indexRouter); // Home route

app.get("*", (req, res) => {
  res.redirect("/");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3001`);
});

module.exports = app;
