function comp(array1, array2) {
  // if (array1 === null || array1.length == 0 || array2 === null || array2.length == 0 || array1.length != array2.length) 
  if(array1 === null || array2 === null)
    return false;
  let arr = a.filter((values) => {
     let val = values * values;
     let temp = b.indexOf(val);
    //  console.log(temp);
    array2.splice(temp,1);
     return temp + 1;
    // return b.indexOf(values * values) + 1;
  })
  return array1.length === arr.length;
}
// a = [121, 144, 19, 161, 19, 144, 19, 11]  
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// c = []
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
console.log(comp(a, b))