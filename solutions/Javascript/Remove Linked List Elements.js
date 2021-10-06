function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeElements = function (head, val) {
  let prev = null;
  let current = head;
  while (current) {
    if (head.val === val) {
      head = current.next;
      prev = head;
      current = current.next;
    } else if (current.val === val) {
      prev.next = current.next;
      current = current.next;
    } else {
      prev = current;
      current = current.next;
    }
  }

  return head;
};
