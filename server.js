const express = require("express");
const app = express();
const port = 8383;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World!</h1>");
  console.log();
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
