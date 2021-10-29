class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        nodes=set()
        temp=head;
        while temp:
            if temp not in nodes:
                nodes.add(temp)
            else:
                return temp
            temp=temp.next;
        return None