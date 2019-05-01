/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @desc  运行超过了12000毫秒
 * @desc 结果正确
 */
function scramble(str1, str2) {
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for (let values of arr2) {
    let n = arr1.indexOf(values)
    if (n + 1) {
      arr1.splice(n, 1);
    } else {
      return false;
    }
  }
  return true;
}
console.log(scramble('katas', 'steak'))