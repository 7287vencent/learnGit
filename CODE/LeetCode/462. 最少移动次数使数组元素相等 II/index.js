/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let i = 0,
      j = nums.length - 1,
      result = 0;
    while(i < j){
      result += nums[j--] - nums[i++] 
    } 
    return result
};

console.log(minMoves2(nums))