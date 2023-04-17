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
function getSeason(date = '') {
  try {
    const month = m => {
      if(m >= 2 && m <=4) return  'spring';
      if(m >= 5 && m <=7) return  'summer';
      if(m >= 8 && m <=10)return  'autumn';
      if(m == 11 || m == 0 || m == 1) return 'winter';
    }
    if(date === '') return 'Unable to determine the time of year!';
    if(!(date instanceof Date && !isNaN(date))){
        throw new Error("Invalid date!")
    }
    return month(date.getMonth());
  }catch (err) {
    throw new Error("Invalid date!")
  }
}


module.exports = {
  getSeason
};
