const express = require("express");
const pool = require("./db/queries.js");

const app = express();
const port = 8080;

app.get("/api/bugs", (req, res) => {
  pool.sendBugs().then(results => {
    res.send(results);
  });
});

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
