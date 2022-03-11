function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return{ListNode}
 */
var rotateRight = function (head, k) {
  if (head === null || head.next === null || k == 0) return head;
  let len = 1;
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
    len++;
  }
  temp.next = head;

  k = k % len;
  k = len - k;

  let curr = head;

  while (k > 1) {
    curr = curr.next;
    k = k - 1;
  }

  head = curr.next;
  curr.next = null;
  return head;
};
