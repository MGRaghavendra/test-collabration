class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var deleteDuplicates = function (head = undefined) {
  let values = {},
    temp = head;
  let dummy_head = null;
  let dummy_temp = null;
  while (temp !== null) {
    if (values[temp.val]) {
      values[temp.val] = values[temp.val] + 1;
    } else values[temp.val] = 1;
    temp = temp.next;
  }
  let keys = [];
  for (let key in values) {
    if (values[key] === 1) {
      keys.push(key);
    }
  }
  keys.sort((a, b) => a - b);
  for (let i in keys) {
    if (dummy_head === null) {
      dummy_head = new ListNode(keys[i]);
      dummy_temp = dummy_head;
    } else {
      dummy_temp.next = new ListNode(keys[i]);
      dummy_temp = dummy_temp.next;
    }
  }
  return dummy_head;
};
