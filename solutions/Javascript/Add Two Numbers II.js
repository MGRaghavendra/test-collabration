class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function getNumber(node) {
  let numbers = [];
  while (node) {
    numbers.unshift(node.val);
    node = node.next;
  }
  return numbers;
}

function addTwoLists(l1, l2) {
  let sum = 0,
    carry = 0,
    i = 0,
    j = 0;
  let res = [];
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

function makeList(l1) {
  let head = new ListNode(-1);
  let temp = head;
  while (l1.length > 0) {
    temp.next = new ListNode(l1.pop());
    temp = temp.next;
  }
  return head.next;
}

var addTwoNumbers = function (l1, l2) {
  let num1 = getNumber(l1);
  let num2 = getNumber(l2);
  return makeList(addTwoLists(num1, num2));
};
