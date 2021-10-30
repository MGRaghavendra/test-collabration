class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getNumber(node: ListNode | null): number[] {
  let numbers: number[] = [];
  while (node) {
    numbers.unshift(node.val);
    node = node.next;
  }
  return numbers;
}

function addTwoLists(l1: number[], l2: number[]): number[] {
  let sum: number = 0,
    carry: number = 0,
    i: number = 0,
    j: number = 0;
  let res: number[] = [];
  while (i < l1.length || j < l2.length) {
    let a = 0,
      b = 0;
    if (i < l1.length) a = l1[i];
    if (j < l2.length) b = l2[j];
    sum = a + b + carry;
    carry = Math.floor(sum / 10);
    res.push(sum % 10);
    i = i + 1;
    j = j + 1;
  }
  if (carry !== 0) res.push(carry);
  return res;
}

function makeList(l1: number[]): ListNode | null {
  let head: ListNode | null = new ListNode(-1);
  let temp: ListNode | null = head;
  while (l1.length > 0) {
    temp.next = new ListNode(l1.pop());
    temp = temp.next;
  }
  return head.next;
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  return makeList(addTwoLists(getNumber(l1), getNumber(l2)));
}
