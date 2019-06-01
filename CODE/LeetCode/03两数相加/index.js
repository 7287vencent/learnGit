/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // console.log(l1.reverse(),l2.reverse())
    var arr1 = parseInt(l1.reverse().join(''))
    var arr2 = parseInt(l2.reverse().join(''))
    var arr = arr1 + arr2
    var arr3 = arr.toString().split('').reverse()
    return arr3
};
var l1 = [2,4,3]
var l2 = [5,6,4]
console.log(addTwoNumbers(l1,l2))