class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var oddEvenList = function (head) {
  if (!head) return null;
  if (!head.next) return head;
  let temp = head,
    eveHead = null,
    eve = null,
    oddHead = null,
    odd = null;
  while (temp && temp.next) {
    let current = temp.next.next,
      node1 = temp,
      node2 = temp.next;
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
};
