const express = require("express");
const pool = require("./db/queries.js");

const app = express();
const port = 3000;

app.get("/api/bugs", (req, res) => {
  pool.sendBugs().then(results => {
    res.send(results);
  });
  // .catch(err => {
  //   console.log("You got an error", err);
  // });
});

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
