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
function encodeLine(str){
  let obj = {};
  let res = '';
  for(let val of str){
    if(val in obj) obj[val] += 1;
    else obj[val] = 1;
  }
  for(let key in obj){
     res += obj[key] + key;
  }
  return res.replaceAll('1','');
}


module.exports = {
  encodeLine
};
