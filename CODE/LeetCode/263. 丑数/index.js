/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    // console.log(num%2)
    if(num < 1) {
      return false
    }
    while(num % 2 === 0) {
      num /= 2 
    }
    while(num % 3 === 0) {
      num /= 3 
    }
    while(num % 5 === 0) {
      num /= 5 
    }
   return num === 1
};
num = 1
console.log(isUgly(num))