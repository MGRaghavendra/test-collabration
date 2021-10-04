function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let dummy = null;
  while (head) {
    temp = head.next;
    head.next = dummy;
    dummy = head;
    head = temp;
  }
  return dummy;
};
