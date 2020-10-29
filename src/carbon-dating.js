const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let sampleActivityNumber = Number.parseFloat(sampleActivity);
  if (arguments.length === 0) {
    return false;
  } else {
    if (typeof sampleActivity !== 'string') {
      return false;
    } else if (Number.isNaN(sampleActivityNumber)) {
      return false;
    } else if (sampleActivityNumber <= 0 || sampleActivityNumber > 15) {
      return false;
    } else {
      return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber) / (0.693 / HALF_LIFE_PERIOD));
    }
  }
};
