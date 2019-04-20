function spinWords(str) {
  var str_arr = str.split(' ');
  for (let key in str_arr) {
    let temp;
    temp = str_arr[key].split('')
    if (temp.length > 5) {
      str_arr[key] = temp.reverse().join('');
    }
  }
  return str_arr;
}
console.log(spinWords("Hey fellow warriors"));