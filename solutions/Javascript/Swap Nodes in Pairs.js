function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var swapPairs = function (head) {
  let stack = [],
    current = head,
    temp = null,
    last_node = null;
  if (!head) return null;
  if (!head.next) return head;
  while (current) {
    let temp2 = current.next;
    current.next = null;
    stack.push(current);
    current = temp2;
  }
  let { length } = stack;
  if (length % 2 !== 0) {
    last_node = stack.pop();
  }
  while (stack.length > 0) {
    let node1 = stack.pop();
    let node2 = stack.pop();
    if (temp === null) {
      node1.next = node2;
      temp = node1;
    } else {
      node2.next = temp;
      node1.next = node2;
      temp = node1;
    }
  }
  if (last_node !== null) {
    let current = temp;
    while (current.next) current = current.next;
    current.next = last_node;
  }
  return temp;
};
