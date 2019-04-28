// 方法一
// function tribonacci(signature,n){  
//   // 遍历的次数是 n-3 次
//   for (var i = 0; i < n-3; i++) { 
//     signature.push(signature[i] + signature[i+1] + signature[i+2]); 
//   }
//   // 截取0 - n项
//   return signature.slice(0, n);
// }
// 方法二
function tribonacci(signature,n) {
  const result = signature.slice(0, n);
  while (result.length < n) {
    result[result.length] = result.slice(-3).reduce((p,c) => p + c);
  }
  return result;
}

console.log(tribonacci([3,2,1],10))

