class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  let current: ListNode = head,
    temp: ListNode = head;
  let array: number[] = [];
  let count: number = 0;
  while (temp) {
    array.push(temp.val);
    count = count + 1;
    temp = temp.next;
  }
  let dummy: number = array[k - 1];
  array[k - 1] = array[count - k];
  array[count - k] = dummy;
  let i = 0;
  while (current) {
    current.val = array[i];
    i++;
    current = current.next;
  }
  return head;
}
