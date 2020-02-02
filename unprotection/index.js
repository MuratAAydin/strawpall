const data = require("../config.json");
const vote = require("strawpoll-bots").default;
const { join } = require("path");

console.log(`\x1b[33mhave fun\x1b[32m`);
//edit config.json
vote(
  data.protection_url,
  data.protection_number,
  true,
  join(__dirname, "ip.txt"),
  data.protection_amount
);
