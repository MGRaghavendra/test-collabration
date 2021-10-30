class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let v1: number = 0,
    v2: number = 0,
    carry: number = 0,
    sum: number = 0,
    temp: ListNode | null = new ListNode(-1),
    ptr: ListNode | null = temp;
  while (l1 !== null || l2 !== null) {
    if (l1 !== null) {
      v1 = l1.val;
      l1 = l1.next;
    } else {
      v1 = 0;
    }
    if (l2 !== null) {
      v2 = l2.val;
      l2 = l2.next;
    } else {
      v2 = 0;
    }
    sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    sum = sum % 10;
    ptr.next = new ListNode(sum);
    ptr = ptr.next;
  }
  if (carry !== 0) {
    ptr.next = new ListNode(carry);
  }
  return temp.next;
}
