class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var nextLargerNodes = function (head) {
  let temp = head;
  let stack = [],
    arr = [];
  while (temp) {
    arr.push(temp.val);
    temp = temp.next;
  }
  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[i]) {
      arr[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    arr[stack.pop()] = 0;
  }
  return arr;
};
