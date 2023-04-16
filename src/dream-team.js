const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  let dreamTeam = '';
  let func = (item) => {
    if (typeof item === 'string') {
      if (item.length > 0) {
        dreamTeam = dreamTeam + item.trim()[0];
      }
    }
  }
  let res = members.forEach(func);
  let arr = dreamTeam.toLocaleLowerCase().split('');
  arr.sort();
  dreamTeam = arr.join('');
  
  return (dreamTeam.length > 0 ? dreamTeam.toUpperCase() : false);
}

module.exports = {
  createDreamTeam
};
