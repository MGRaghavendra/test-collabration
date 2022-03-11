class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null || k == 0) return head;
  let len: number = 1;
  let temp: ListNode | null = head;
  while (temp.next !== null) {
    temp = temp.next;
    len++;
  }
  temp.next = head;

  k = k % len;
  k = len - k;

  let curr: ListNode | null = head;

  while (k > 1) {
    curr = curr.next;
    k = k - 1;
  }

  head = curr.next;
  curr.next = null;
  return head;
}
