console.log("test");
const express = require("express");
const app = express();

let roleModel = {
  name: "Margot Robbie",
  occupation: "Actor",
  languages: ["English"],
};

app.get("/role-model", (req, res) => {
  res.json(roleModel);
});
app.listen(5005);
