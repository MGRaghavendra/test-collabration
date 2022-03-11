class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if head==None or head.next==None or k==0:
            return head;
        else:
            count=1;
            temp=head;
            while temp.next:
                count=count+1;
                temp=temp.next;

            temp.next=head;
            k=k%count;
            k=count-k;
            curr=head;
            while k>1:
                curr=curr.next;
                k=k-1;
            head=curr.next
            curr.next=None;
            return head;