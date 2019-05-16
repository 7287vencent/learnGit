/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  // 方法一
    // let n = x^y
    // let count = 0
    // while(n != 0) {
    //   // 为什么要用与运算？
    //   n = n & (n - 1)
    //   count++
    // }

    // return count
    // let n = [...(x^y).toString(2)].filter(item => {
    //   return item != 0
    // })
    // return n.length
    // 方法二
    return [...(x^y).toString(2)].filter(item => {
      return item != 0
    }).length
    // console.log(n.length)
};
console.log(hammingDistance(1,4))