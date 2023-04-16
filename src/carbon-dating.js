const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === undefined || sampleActivity.toLocaleLowerCase() === 'infinity'
    || parseInt(sampleActivity) === NaN || parseInt(sampleActivity) === Infinity || parseInt(sampleActivity) === -Infinity
    || parseInt(sampleActivity) <= 0 || isNaN(parseInt(sampleActivity))) {
    return false;
  }

  let sA = Number(sampleActivity);
  let sampleAge = Math.log(MODERN_ACTIVITY / sA) / (0.693 / HALF_LIFE_PERIOD);

  if (sampleAge < 0) {
    return false;
  }
  
  return Math.ceil(sampleAge); 
}

module.exports = {
  dateSample
};
