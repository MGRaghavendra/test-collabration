function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var isPalindrome = function (head) {
  let res = "";
  let node = head;
  while (node) {
    res = res + node.val.toString();
    node = node.next;
  }
  let i = 0,
    j = res.length - 1;
  while (i < j) {
    if (res[i] !== res[j]) {
      return false;
    }
    i = i + 1;
    j = j - 1;
  }
  return true;
};
