const data = require("../config.json");
const vote = require("strawpoll-bots").default;

console.log(`\x1b[33mhave fun\x1b[32m`);
//edit config.json
vote(
  data.unprotection_url,
  data.unprotection_number,
  false,
  null,
  data.unprotection_amount
);
