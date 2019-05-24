/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Math.min(...nums);
    let result = 0;
    for(let item of nums) {
      result += (item - min)
    }
    console.log(min,result)
    return result;
};
var nums = [1,2,3]
minMoves(nums)