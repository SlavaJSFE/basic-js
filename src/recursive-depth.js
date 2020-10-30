const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    let depth = 1;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        counter = 1 + this.calculateDepth(element);
      }
    });
    if (counter > depth) {
      depth = counter;
    }
    counter = 1;
    return depth;
    }
};