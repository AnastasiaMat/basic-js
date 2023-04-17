const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let letter_ = str[0];
  let counter = 0;
  let res = "";

  if (str === '') return '';

  for (let i = 0; i < str.length; i++) {
    if (letter_ === str[i]) {
      counter += 1;
    } else {
      res += "" + (counter === 1 ? '': counter) + letter_;
      counter = 1;
    }
    letter_ = str[i];
  }
  res += "" + (counter === 1 ? '': counter) + letter_;
  return res;
}

module.exports = {
  encodeLine
};
