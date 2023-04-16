const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.chain.push(`(  )`);
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position)) {
      throw new Error("You can't remove incorrect link!");
    }
    let index = position - 1;
    if (index < 0 || index > this.chain.length - 1 || index  === this.chain.length) {
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(index, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.slice().join('~~');
    this.chain = [];
    //throw new Error();
    return result;
  }
};

module.exports = {
  chainMaker
};
