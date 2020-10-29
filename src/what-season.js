const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (arguments.length === 1) {
    if (Object.prototype.toString.call(date) === '[object Date]') {
        if (date.getMonth() >= 0 && date.getMonth() < 2) {
          return 'winter';
        } else if (date.getMonth() >= 2 && date.getMonth() < 5) {
          return 'spring';
        } else if (date.getMonth() >= 5 && date.getMonth() < 8) {
          return 'summer';
        } else if (date.getMonth() >= 11 && date.getMonth() < 12) {
          return 'winter';
        } else {
          return 'autumn';
        }
    } else {
      throw new Error('THROWN');
    }
  } else {
    return 'Unable to determine the time of year!';
  }
};
