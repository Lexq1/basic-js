const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength(){
    return this.arr.length;
  },
  addLink(val){
    this.arr.push(`( ${val} )`);
    return this;
  },
  removeLink(p){
    if(Number.isInteger(p) && p < this.arr.length && p > 0){
      this.arr.splice(p-1,1);
      return this;
    }else{
      this.arr = [];
      throw new Error(`You can't remove incorrect link!`);
    }
  },
  reverseChain(){
    this.arr.reverse();
    return this;
  },
  finishChain(){
    let res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
}


module.exports = {
  chainMaker
};
