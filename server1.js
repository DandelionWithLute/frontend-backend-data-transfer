const express = require("express");
const app = express();
const port = 8383;

app.get("/", (req, res) => {
  res.status(200).send("");
});

app.listen(port, () => {
  console.log(`The server has started on port ${port}`);
});
