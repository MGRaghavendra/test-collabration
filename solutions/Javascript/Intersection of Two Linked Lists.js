function ListNode(val) {
  this.val = val;
  this.next = null;
}

var getIntersectionNode = function (headA, headB) {
  let addresses = [];
  while (headA || headB) {
    if (headA) {
      if (addresses.indexOf(headA) < 0) {
        addresses.push(headA);
        headA = headA.next;
      } else {
        return headA;
      }
    }
    if (headB) {
      if (addresses.indexOf(headB) < 0) {
        addresses.push(headB);
        headB = headB.next;
      } else {
        return headB;
      }
    }
  }
};
