const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (typeof date !== Object) {
    return 'Error';
  } else if (date === null) {
    return 'Unable to determine the time of year!'
  }
  // remove line with error and write your code here
};
