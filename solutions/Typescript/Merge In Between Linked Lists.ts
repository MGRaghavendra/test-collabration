class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  let i: number = 0;
  let right_list: ListNode = list1,
    current1: ListNode = list1,
    current2: ListNode = list2;
  while (i <= b) {
    right_list = right_list.next;
    i = i + 1;
  }
  while (current2.next) current2 = current2.next;
  current2.next = right_list;
  i = 0;
  while (i < a - 1) {
    current1 = current1.next;
    i = i + 1;
  }
  current1.next = list2;
  return list1;
}
