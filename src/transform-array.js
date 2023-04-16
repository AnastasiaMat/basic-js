const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) { 
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];
  let s = [
    '--discard-next',
    '--discard-prev',
    '--double-next',
    '--double-prev'
  ]

  for (let i = 0; i < arr.length; i+= 1) {
    let ind = s.indexOf(arr[i]);
    if (ind === -1) {
      result.push(arr[i]);
    } else if (ind === 0) {
      result.push('--discard-next');
      i += 1;
    } else if (ind === 1) {
      if (result.length > 0) {
        if (result[result.length - 1] !== '--discard-next')
        result.pop();
        result.push('--discard-next');
      }
    } else if (ind === 2) {
      if (i + 1 < arr.length) {
        result.push(arr[i + 1]);
      }
    } else if (ind === 3) {
      if (result.length > 0) {
        result.push(result[result.length - 1]);
      }
    }
  }

  let nres = [];
  for (let i = 0; i < result.length; i += 1) {
    if (result[i] !== '--discard-next') {
      nres.push(result[i]);
    }
  }
  return nres;
}

module.exports = {
  transform
};
