/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let carry = 0, //进位
    len1 = num1.length, //num1 的长度
    len2 = num2.length, //num2 的长度
    arr = []; //最后结果的数组，需要调换位置
  var max = Math.max(len1, len2); //取出两者最长的那个来做为循环结束条件

  for (let i = len1 - 1, j = len2 - 1, n = max - 1; n >= 0; n--, i--, j--) {
    var sum = (+num1[i] || 0) + (+num2[j] || 0) + carry;
    if (sum >= 10) {
      carry = 1;
      arr.push(sum - 10);
    } else {
      carry = 0;
      arr.push(sum);
    }
  }
  if (carry > 0) {
    arr.push(carry);
  }
  return arr.reverse().join('');
};