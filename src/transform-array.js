const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let disN = `--discard-next`;
  let disP = `--discard-prev`;
  let dblN = `--double-next`;
  let dblP = `--double-prev`;
  let newArr = [];
  if (Array.isArray(arr)) {
    if (arr.length === 0) {
      return arr;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || typeof arr[i] !== disN || typeof arr[i] !== disP || typeof arr[i] !== dblN || typeof arr[i] !== dblP) {
          newArr.push(arr[i]);
        } else {
          if (typeof arr[i] === 'number' && (typeof arr[i + 1] === 'number' || typeof arr[i + 1] === 'undefined')) {
            newArr.push(arr[i]);
          } //else if ()
        }
      }
      return newArr;
    }
  } else {
    throw 'Error';
  }
};
