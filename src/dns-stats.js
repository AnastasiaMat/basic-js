const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let splitArr = domains.map((item) => {
    return item.split('.').reverse();
  });

  let dict = {};
  let maxLength = 0;
  for (let i = 0; i < splitArr.length; i++) {
    if (splitArr[i].length > maxLength) {
      maxLength = splitArr[i].length;
    }

    let member = splitArr[i];
    let domain = '';
    for (let j = 0; j < member.length; j++) {
      domain += '.' + member[j];
      if (dict[domain] === undefined) {
        dict[domain] = 1;
      } else {
        dict[domain] += 1;
      }
    }
  }
  return dict;
}

module.exports = {
  getDNSStats
};
