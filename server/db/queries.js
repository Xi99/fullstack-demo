const { Pool } = require("pg");

const pool = new Pool({
  database: "bugs"
});

const sendBugs = () => {
  return pool.query("SELECT * FROM bug").then(res => res.rows);
};

const addBug = bug => {
  const values = [
    bug["bugDescription"],
    bug["reportedBy"],
    bug["createdDate"],
    bug["assignedTo"],
    bug["threatLevel"]
  ];
  return pool
    .query(
      "INSERT INTO bug (bugDescription, reportedBy, createdDate, assignedTo, threatLevel) VALUES ($1, $2, $3, $4, $5)",
      values
    )
    .then(() => true);
};

module.exports = {
  sendBugs,
  addBug
};
