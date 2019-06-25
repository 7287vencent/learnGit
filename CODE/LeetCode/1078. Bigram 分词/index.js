/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    let arr = text.split(' ')
    let result = []
    // console.log(arr)
    // 这里可以 在 if 中加上 && arr[i+2]
    // 或者 把 for 改成 len - 2
    for (let i = 0, len = arr.length; i < len; i++) {
      if(arr[i] === first && arr[i+1] === second && arr[i+2]) {
        result.push(arr[i+2])
      }
    }
    console.log(result)
    return result
};

let text = "alice is a good girl she is a good", first = "a", second = "good"
findOcurrences(text,first,second)