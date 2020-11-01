const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    
    arr.forEach(element => {
      if (Array.isArray(element)) {
        let depth = 1;
        depth += this.calculateDepth(element);
        if (depth > counter) {
          counter = depth; 
        }  
      }
    });   
    
    return counter;
    }
};