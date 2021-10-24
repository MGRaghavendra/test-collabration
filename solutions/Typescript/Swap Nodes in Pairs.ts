class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let stack: ListNode[] = [],
    current: ListNode = head,
    temp: ListNode | null = null,
    last_node: ListNode | null = null;
  if (!head) return null;
  if (!head.next) return head;
  while (current) {
    let temp2: ListNode = current.next;
    current.next = null;
    stack.push(current);
    current = temp2;
  }
  let { length } = stack;
  if (length % 2 !== 0) {
    last_node = stack.pop();
  }
  while (stack.length > 0) {
    let node1: ListNode = stack.pop();
    let node2: ListNode = stack.pop();
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
    let current: ListNode = temp;
    while (current.next) current = current.next;
    current.next = last_node;
  }
  return temp;
}
