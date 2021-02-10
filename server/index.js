const express = require("express");
const path = require("path");
const cluster = require("cluster");
const cors = require("cors");
const numCPUs = require("os").cpus().length;
require("./db.json");
const isDev = process.env.NODE_ENV !== "production";
const PORT = process.env.PORT || 5000;

if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.error(
      `Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`
    );
  });
} else {
  const app = express();
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
  });
  app.listen(PORT, function () {
    console.error(
      `Node ${"cluster worker " + process.pid}: listening on port ${PORT}`
    );
  });
}
