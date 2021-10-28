class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var swapNodes = function (head, k) {
  let current = head,
    temp = head;
  let array = [];
  let count = 0;
  while (temp) {
    array.push(temp.val);
    count = count + 1;
    temp = temp.next;
  }
  let dummy = array[k - 1];
  array[k - 1] = array[count - k];
  array[count - k] = dummy;
  let i = 0;
  while (current) {
    current.val = array[i];
    i++;
    current = current.next;
  }
  return head;
};
