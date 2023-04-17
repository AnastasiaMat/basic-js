const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  consructor(type){
    if (type === false) {
      this.direct = false;
    } else if (type === true || type === undefined) {
      this.direct = true;
    }
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }


    while (key.length < message.length) {
      key += key;
    }
    key = key.split('');
    
    let arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let res = '';

    for (let i = 0; i < message.length; i++) {
      let mesIndex = message[i];
      let keyIndex = key[i];
      let codedSymbol = '';
      
      let pi = arr.indexOf(mesIndex.toUpperCase());
      let kj = arr.indexOf(keyIndex.toUpperCase());
      if (pi > -1){
          codedSymbol = arr[(pi + kj) % 26]; 
      } else {
          let delEl = key.splice(i, 0, message[i]);
          codedSymbol = message[i];
      }

      res += codedSymbol;
    }

    if (this.direct === false){
      res = res.split('').reverse().join('');
    }
    return res.toUpperCase();
  }
  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    while (key.length < encryptedMessage.length) {
      key += key;
    }
    key = key.split('');
    
    let arr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

    let res = '';

    for (let i = 0; i < encryptedMessage.length; i++) {
      let mesIndex = encryptedMessage[i];
      let keyIndex = key[i];
      let decodedSymbol = '';
      
      let ci = arr.indexOf(mesIndex.toUpperCase());
      let kj = arr.indexOf(keyIndex.toUpperCase());
      if (ci > -1){
          decodedSymbol = arr[(ci + 26 - kj) % 26]; 
      } else {
        let delEl = key.splice(i, 0, encryptedMessage[i]);
        decodedSymbol = encryptedMessage[i];
      }

      res += decodedSymbol;
    }

    if (this.direct === false){
      res = res.split('').reverse().join('');
    }
    return res.toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
