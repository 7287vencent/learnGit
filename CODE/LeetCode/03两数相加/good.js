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

// function ListNode(val) {
//   this.val = val;
//    this.next = null;
// }
var addTwoNumbers = function(l1, l2) {
  let dummyHead = new ListNode(0),carry = 0,curr = dummyHead;
   
  while (l1 !== null || l2 !== null) {
      let num1 = l1 ? l1.val : 0;
      let num2 = l2 ? l2.val : 0;
      let sum = num1 + num2 + carry;
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
      carry = sum > 9 ? 1 : 0;
      l1 = l1 ? l1.next : l1;
      l2 = l2 ? l2.next : l2;
  }

  if (carry > 0) {
      curr.next = new ListNode(1);
  }
  return dummyHead.next;
};
// console.log(addTwoNumbers([2,4,3],[5,6,4]))