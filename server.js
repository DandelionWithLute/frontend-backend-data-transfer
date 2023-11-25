const express = require("express");
const app = express();
const port = 8383;
const cors = require("cors")
app.use(express())
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).json({info:"the information is bee🐝"});
  console.log();
});

app.listen(port, () => {
  console.log(`Server has started on port ${port}`);
});
