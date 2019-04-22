function isIsogram(str) {
  return !/(\w).*\1/i.test(str)
  // var patt1 = /(\w).*\1/i;
  // console.log(patt1);
  // var patt1 = /[a-h]/g;
  // console.log(str.match(patt1));

  // 方法一
  // var patt1 = !/(\w).*\1/i.test(str);
  // console.log(patt1);
  
  // 方法二
    return new Set(str.toUpperCase()).size == str.length;
    // Set 是es6 的语法知识 Set数组去重  
    // 就是数组只保留不重复的项 
}
console.log(isIsogram("Dermdatoglyphics"))