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
  // calculateDepth(arr) {
  //   if (arr instanceof Array) {
  //     let maximal = 0;
  //     for (let i = 0; i < arr.length; i++) {
  //       let cur = this.calculateDepth.call(this.arr[i]);
  //       if (maximal < cur) {
  //         maximal = cur;
  //       }
  //     }
  //     return 1 + maximal;
  //   } else {
  //     return 0;
  //   }
  // }

  // calculateDepth(arr) {
  //   let counter = 1;
  //   let depthCount = 1;
  //   for (let item of arr) {
  //     if (Array.isArray(item)) {
  //       counter = 1 + this.calculateDepth(item);   
  //       this.calculateDepth(item);
  //     }
  //   }    
  //   if (this.counter > this.depthCount) {
  //     this.depthCount = this.counter;
  //   }
  //   this.counter = 1;
  //   return this.depthCount;
  // }
};