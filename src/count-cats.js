const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = matrix.reduce((subresult, cats) => {
    if (Array.isArray(cats)) {
      return subresult + cats.filter(item => item === '^^').length;
    } else {
      return subresult;
    }
  }, 0);
  return result;
}

module.exports = {
  countCats
};
