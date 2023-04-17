const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = '' + str;
  }

  let repeatTimes = 1;
  let separator = '+';
  let addition  = '';
  let additionRepeatTimes  = 1;
  let additionSeparator  = '|';

  if (options !== undefined) {
    repeatTimes = options.repeatTimes;
    separator = options.separator;
    addition  = options.addition ;
    additionRepeatTimes  = options.additionRepeatTimes ;
    additionSeparator  = options.additionSeparator;

    if (repeatTimes === undefined) {
      repeatTimes = 1;
    }

    if (separator === undefined) {
      separator = '+';
    }

    if (addition === undefined) {
      addition = '';
    }
    if (typeof addition !== 'string') {
      addition = '' + addition;
    }

    if (additionRepeatTimes === undefined) {
      additionRepeatTimes = 1;
    }

    if (additionSeparator === undefined) {
      additionSeparator = '|';
    }
  } 

  let addition_ = '';
  for (let j = 0; j < additionRepeatTimes - 1; j++) {
    addition_ += addition + additionSeparator;
  }
  addition_ += addition;
  
  let str_ = '';
  for (let i = 0; i < repeatTimes; i++){
    str_ += str + addition_ + separator;
  }

  return str_.substring(0, str_.length - separator.length);
}

module.exports = {
  repeater
};
