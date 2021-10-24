class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None;
        if not head.next:
            return head;
        stack=[]
        last_node=None
        temp=None
        while head:
            temp=head.next;
            head.next=None;
            stack.append(head)
            head=temp;
        if len(stack)%2!=0:
            last_node=stack.pop()
        while len(stack)>0:
            node1=stack.pop()
            node2=stack.pop()
            if temp==None:
                node1.next=node2;
                temp=node1;
            else:
                node2.next=temp;
                node1.next=node2;
                temp=node1;
        if last_node:
            current=temp;
            while current.next:
                current=current.next;
            current.next=last_node;
        return temp;
