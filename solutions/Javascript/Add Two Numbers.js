class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let v1 = 0,
    v2 = 0,
    carry = 0,
    sum = 0,
    temp = new ListNode(-1),
    ptr = temp;
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
};
