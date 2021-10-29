class List_Node {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function odd_EvenList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  if (!head.next) return head;
  let temp: ListNode | null = head;
  let eveHead: ListNode | null = null;
  let eve: ListNode | null = null;
  let oddHead: ListNode | null = null;
  let odd: ListNode | null = null;
  while (temp && temp.next) {
    let current: ListNode | null = temp.next.next;
    let node1: ListNode | null = temp;
    let node2: ListNode | null = temp.next;
    if (!oddHead) {
      oddHead = node1;
      oddHead.next = null;
      odd = oddHead;
    } else {
      odd.next = node1;
      odd = odd.next;
      odd.next = null;
    }
    if (!eveHead) {
      eveHead = node2;
      eveHead.next = null;
      eve = eveHead;
    } else {
      eve.next = node2;
      eve = eve.next;
      eve.next = null;
    }
    temp = current;
  }
  if (temp) {
    odd.next = temp;
    odd = odd.next;
    odd.next = null;
  }
  odd.next = eveHead;
  return oddHead;
}
