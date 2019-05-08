// 方法一
function listSquared (m, n) {
  var matches = [];

  for (var i = m; i <= n; ++i) {
    var sum = getDivisors(i).reduce((sum, n) => sum + n * n, 0);
    var ok = Number.isInteger(Math.sqrt(sum));

    if (ok) {
      matches.push([i, sum]);
    }
  }

  return matches;
}

function getDivisors (n) {
  var divisors = [];

  for (var i = 1; i <= n / 2; ++i) {
    if (n % i) {
      continue;
    }

    divisors.push(i);
  }

  return divisors.concat([n]);
}
// 方法二
function listSquared(m, n) {
  var arr = [];
  for (var i = m; i <= n; i++){
    var temp = 0;
    for (var j = 1; j <= i; j++) {
      if ( i % j == 0) temp += j*j;  
    };
    if ( Math.sqrt(temp) % 1 == 0) arr.push([i, temp]);
  };
  return arr;
}
// 方法三
function listSquared(m,n){
  let chamber = {};
  function wuTang(x){
    let i = 1, odb = [], meth;
    while (i <= x){!(x % i) ? (odb.push(i),i++) : i++}
    meth = odb.reduce((a,e) => (chamber[e] ? chamber[e] : (chamber[e] = e * e, chamber[e])) + a,0);
    return !(Math.sqrt(meth) % 1) ? [--i,meth] : null;
  }
  return Array.from({length:(n - m)},(e,i) => wuTang(i + m)).filter(e => e);
}
// 方法四
const getSum = n => {
  var res = [],
      i = 1;
  for( ; i <= n; i++ ) {
    if(n % i === 0)res.push(i);
  }
  return res.reduce((s, v) => s + v * v, 0);
}
function listSquared(m, n) {
    var res = [], store, num;
    store = listSquared.cache = listSquared.cache || {};
    for( ; m <= n; m++ ) {
      if(store[m])res.push([m, store[m]])
      else {
        num = getSum(m);
        if(Math.sqrt(num) % 1 === 0){
          store[m] = num;
          res.push([m,num]);
        }
      }
    }
    return res
}
// 方法五
function listSquared(m, n) {
  const divs = _ => [...Array(~~Math.sqrt(_))].reduce((a, b, i) => {
    i++
    return _ % i ? a : a + Math.pow(i, 2) + Math.pow(i == _ / i ? 0 : _ / i, 2)
  }, 0)
  const res = []
  for (let i = m; i <= n; i++) {
    let d = divs(i)
    if (Math.sqrt(d) % 1 == 0) res.push([i, d])
  }
  return res
}
// 方法六
function listSquared(m, n) {
  let result = [];
  for (let i = m; i <= n; i++) {
    let divisors = [];
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) divisors.push(j);
    }
    const sum = divisors.map(item => item ** 2).reduce((sum, i) => sum + i);
    const isSquare = Number.isInteger(Math.sqrt(sum));
    isSquare && result.push([i, sum]);
  }
  return result;
}
