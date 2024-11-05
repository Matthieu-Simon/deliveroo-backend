const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const data = require("./data.json");
console.log(data);

app.get("/", (req, res) => {
  res.json(data);
});

app.all("*", (req, res) => {
  res.json({ message: "Page not found."});
});

// Northflank va nous fournir une variable process.env.PORT
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started");
});