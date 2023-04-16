const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!';
  }

  if (isNaN(Date.parse(date))) {
    throw new Error('Invalid date!');
  }

  try {
    let y = date.getFullYear();
    let m = date.getMonth();
    let d = date.getDate();
    let h = date.getHours();
    let minu = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds();
    let mmss = date.getTime();
    let dd = new Date();

    if (m < 2 || m === 11) {
      return 'winter';
    } else if (m < 5) {
      return 'spring';
    } else if (m < 8) {
      return 'summer';
    } else {
      return 'autumn';
    }
  } catch (error) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
