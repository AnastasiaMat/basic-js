const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxN= 0;
  let strArr = n.toString().split('');
  for (let i = 0; i < strArr.length; i++) {
    let arr = strArr.slice();
    arr[i] = '';
    let shortStr = arr.join('');
    if (Number(shortStr) > maxN) {
      maxN = Number(shortStr);
    }
  }

  return maxN;
}

module.exports = {
  deleteDigit
};
