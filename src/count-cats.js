const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  let arr = matrix.flat();

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '^^') {
        count += 1;
      }
      
  }
  return count;
  // remove line with error and write your code here
};
