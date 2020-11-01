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
        if (arr[i] === disN) {
            i++;
            continue;
        } else if (arr[i] === disP && arr[i - 2] !== disN) {
            newArr.pop();
        } else if (arr[i] === dblN) {
            if (arr[i + 1] !== undefined) {
                newArr.push(arr[i + 1]);
            }
            i++;
        } else if (arr[i] === dblP && arr[i - 2] !== disN) {
            if (arr[i - 1] !== undefined) {
                newArr.push(arr[i - 1]);
            }
            i++;
        }
        if (arr[i] !== dblP && arr[i] !== dblN && arr[i] !== disP && arr[i] !== disN && arr[i] !== undefined) {
            newArr.push(arr[i]);
        }
      }

      return newArr;
    }
  } else {
    throw new Error;
  }
};







// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] !== 'number' && arr[i] !== disN && arr[i] !== disP && arr[i] !== dblN && arr[i] !== dblP) {
//     newArr.push(arr[i]);
//   } else {

//     if (arr[i] === '--discard-next') {
//       i++;
//   } else if (arr[i] === '--discard-prev' && arr[i - 2] !== '--discard-next') {
//       newArr.pop();
//   } else if (arr[i] === '--double-next') {
//       if (arr[i + 1] !== undefined) {
//           newArr.push(arr[i + 1]);
//       };
//       i++;
//   } else if (arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
//       if (arr[i - 1] !== undefined) {
//           newArr.push(arr[i - 1]);
//       };
//       i++;
//   };

//     // if (typeof arr[i] === 'number' && (typeof arr[i + 1] === 'number' || typeof arr[i + 1] === 'undefined')) {
//     //   newArr.push(arr[i]);
//     // } else if ()
//   }
// }