const { Pool } = require("pg");

const pool = new Pool({
  database: "bugs"
});

const sendBugs = () => {
  pool.query("SELECT * FROM bug").then(res => res.rows);
};

module.exports = {
  sendBugs
};
