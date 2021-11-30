class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function merge(a, b) {
  let dummy = new ListNode(0);
  let temp = dummy;
  while (a && b) {
    if (a.val < b.val) {
      temp.next = new ListNode(a.val);
      temp = temp.next;
      a = a.next;
    } else {
      temp.next = new ListNode(b.val);
      temp = temp.next;
      b = b.next;
    }
  }
  while (a || b) {
    if (a) {
      temp.next = new ListNode(a.val);
      temp = temp.next;
      a = a.next;
    }
    if (b) {
      temp.next = new ListNode(b.val);
      temp = temp.next;
      b = b.next;
    }
  }
  return dummy.next;
}

var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  let last = lists.length - 1;
  while (last != 0) {
    let i = 0;
    let j = last;
    while (i < j) {
      lists[i] = merge(lists[i], lists[j]);
      i = i + 1;
      j = j - 1;
      if (i >= j) {
        last = j;
      }
    }
  }
  return lists[0];
};
