function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

// 方法二
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}

array_diff = require("lodash").difference;

function array_diff(a, b) {
  return a.filter(x=>b.indexOf(x));
}

function array_diff(a, b) { 
  const d = b.reduce((p, v) => { p[v]=1; return p; }, {});
  return a.filter(v => !d[v]); 
}