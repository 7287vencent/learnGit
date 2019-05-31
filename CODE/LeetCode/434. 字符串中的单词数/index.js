/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let i = 0,
    total = 0,
    pre = 0;
  while (i < s.length) {
    if (pre == 0 && s.charAt(i) != ' ') {
      total++;
      pre = 1;
    } else if (s.charAt(i) == ' ') pre = 0;
    i++;
  }
  return total;
};

let s = "                "
console.log(countSegments(s))