/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
  let node = root //node 代表当前节点
    let len = 0  //存储链表的长度
    // 循环遍历链表，获取链表的长度
    while(node != null) {
      len++
      node = node.next
    }
    node = root
    let mod = len % k
    let minSize = len / k | 0
    // console.log(len,mod, minSize)
    let result =  new Array(k).fill(new ListNode())
    let i
    for( i = 0; node !=null && i < k; i++) {
      result[i] = node
      let size = minSize + (mod-- > 0 ? 1 : 0) // 新建链表的长度
      for(let j = 0; j < size - 1; j++) {
        node = node.next
      }
      let next = node.next
      node.next = null
      node = next
    }
    while(i < k) {
      result[i] = null
      i++
    }
    // console.log(result)
    return result
};
const root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
splitListToParts(root, k)