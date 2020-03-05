const express = require("express");
const pool = require("./db/queries.js");
const bp = require("body-parser");
const cors = require("cors");

const app = express();
const port = 1212;

app.use(bp.json());
app.use(cors());
app.get("/api/bugs", (req, res) => {
  pool.sendBugs().then(results => {
    res.send(results);
  });
});

app.post("/api/bugs", (req, res) => {
  pool.addBug(req.body).then(() => res.sendStatus(201));
});

app.listen(port, () => console.log(`Server app listening on port ${port}!`));
