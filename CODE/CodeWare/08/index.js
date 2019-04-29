// function array_diff(a, b) {
//   let bLen = b.length;
//   let arr = a.filter(valus => {
//     for (let i = 0; i < bLen; i++) {
//       if(valus == b[i]){
//         return ;
//       }
//     }
//     return valus;
//   })
//   arr = new Set(arr);
//   console.log([...arr]);
//   // return a.filter(valus => valus !=b);
// }
function array_diff(a, b) {
let bLen = b.length;
  let arr = a.filter(valus => {
    for (let i = 0; i < bLen; i++) {
      if(valus == b[i]){
        return ;
      }
    }
    // console.log(valus);
    return valus || '0';
  })
  return arr;
}
console.log(array_diff([0,15,-17,-4,16,-13,6],[15,16,-17,-4]));