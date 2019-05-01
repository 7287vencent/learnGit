// console.time("sort");
// function scramble(str1, str2) {
//   var count = Object.create(null);

//   Array.prototype.forEach.call(str1, function(a) {
//       count[a] = (count[a] || 0) + 1;
//       // console.log(a,count[a]);
//   });
//   console.log(count);

//   return Array.prototype.every.call(str2, function(a) {
//     console.log(a,count[a]);

//       return count[a]--;
//   });
// }
console.log(scramble('katas', 'steak'))
// console.timeEnd("sort");

function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; 
    console.log(arr);
    return arr; }, {});
  console.log(occurences);
  return str2.split("").every((character) => --occurences[character] >= 0);
}

// function scramble(str1, str2) {
//   var hashtab = [...new Array(256)].map(x => 0);
  
//   str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
//   str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);
  
//   hashtab = hashtab.filter (x=>x > 0);
  
//   return hashtab.length == 0;
// }
