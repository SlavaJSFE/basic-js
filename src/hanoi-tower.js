const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let result = {};
  let turns = 1;
  for (let i = 1; i < disksNumber; i++) {
    turns = turns * 2 + 1;
  }
  let secunds = Math.floor(turns / (turnsSpeed / 3600));
  result.turns = turns;
  result.seconds = secunds;
  return result;
  // remove line with error and write your code here
};
