function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeInBetween = function (list1, a, r, list2) {
  let i = 0;
  let right_list = list1,
    current1 = list1,
    current2 = list2;
  while (i <= r) {
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
};
