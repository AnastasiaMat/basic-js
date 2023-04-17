const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  function fn(a, b) {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  }

  let newArr = arr.slice().sort(fn);
  let res = [];
  let j = 1;
  let firstInd = newArr.lastIndexOf(-1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      res[i] = -1;
    } else {
      res[i] = newArr[firstInd + j];
      j += 1;
    }
  }

  return res;
}


module.exports = {
  sortByHeight
};
