const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members !== Array) {
    return false;
  } else if (members.length === 0) {
    return 'empty team';
  }

  // remove line with error and write your code here
};
