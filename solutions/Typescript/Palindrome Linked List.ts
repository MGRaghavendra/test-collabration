class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let stack: number[] = [];
  let dummy: ListNode = head;
  while (dummy) {
    stack.push(dummy.val);
    dummy = dummy.next;
  }
  while (head) {
    let val = stack.pop();
    if (val != head.val) return false;
    head = head.next;
  }
  return true;
}
