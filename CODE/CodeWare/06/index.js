function tribonacci(signature, n) {
  // let len = signature.length;
  let index = 0;
  let arr = signature.slice(0,n);
  // console.log(arr);
  while (arr.length < n) {
    let new_arr = arr[index] + arr[index + 1] + arr[index + 2];
    arr.push(new_arr);
    index++;
    // if (arr.length >= n) {
    //   return arr;
    // }
  }
  return arr;
}
console.log(tribonacci([3,2,1],10))

// function tribonacci(signature,n){
//   //your code here
//   let index = 0;
//   while (signature.length < n) {
//     let new_arr = signature[index] + signature[index + 1] + signature[index + 2];
//     signature.push(new_arr);
//     index++;
//     if (signature.length >= n) {
//       return signature;
//     }
//   }
// }