class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
        self.isVisited=False

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        while headA:
            headA.isVisited=True
            headA=headA.next
        while headB:
            if hasattr(headB,'isVisited'):
                return headB
            headB=headB.next

