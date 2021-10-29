class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def oddEvenList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        if not head.next:
            return head;
        [temp,eve,odd,eveHead,oddHead]=[head,None,None,None,None]
        while temp and temp.next:
            current=temp.next.next
            node1=temp
            node2=temp.next
            if not eve:
                eve=node2;
                eve.next=None
                eveHead=eve
            else:
                eve.next=node2;
                eve=eve.next;
                eve.next=None;
            if not odd:
                odd=node1;
                odd.next=None
                oddHead=odd
            else:
                odd.next=node1;
                odd=odd.next;
                odd.next=None;
            temp=current
        if temp:
            odd.next=temp
            odd=odd.next;
            odd.next=None;
        odd.next=eveHead;
        return oddHead;
