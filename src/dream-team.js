//const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  } else if (members.length === 0) {
    return 'empty team';
  } else {
    let result = [];
    for (let i = 0; i < members.length; i++) {
      let name = members[i];
      if (typeof name === 'string') {
        for (let i = 0; i < name.length; i++) {
          if (name[i] !== ' ') {
            result.push(name[i]);
            break
          }
        }        
      }      
    }
    return result.join('').toUpperCase().split('').sort().join('');
  }
};
