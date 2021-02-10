const express = require("express");
const path = require("path");
require("./db.json");
const PORT = 5000;
const app = express();
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.listen(PORT, function () {
  console.error(
    `Node ${"cluster worker " + process.pid}: listening on port ${PORT}`
  );
});
