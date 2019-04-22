function isIsogram(str) {
  str = str.toLowerCase();
  let str_arr = str.split('');
  // for (let i = 0; i < str_arr.length; i++){
  //   let arr = str_arr.filter(em => em === str_arr[i])
  //   if(arr.length != 1){
  //     return false;
  //   }else{
  //     continue;
  //   }
  // }
  // return true;

  // for (let value of str_arr) {
  //   let arr = str_arr.filter(em => em === value)
  //   // console.log(arr)
  //   if (arr.length != 1) {
  //     return false;
  //   } else {
  //     continue;
  //   }
  //   // return arr.length != 1 ? false : true;
  // }
  // return true;
  
  let arr = str_arr.filter((value, index, arr) => {
    // console.log(value,arr[index]);
    return arr.indexOf(value) === index ;
  });
  // console.log(arr);
  return arr.length == str.length;
}
console.log(isIsogram("mo0se"))