class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        def getNumbers(node):
            res=[]
            while node:
                res.append(node.val);
                node=node.next;
            return res;
        def sumLists(l1,l2):
            res=[]
            Sum=0
            carry=0
            while len(l1)>0 or len(l2)>0:
                a=0
                b=0
                if len(l1)>0:
                    a=l1.pop()
                if len(l2)>0:
                    b=l2.pop()
                Sum=a+b+carry
                carry=Sum//10
                res.append(Sum%10)
            if carry>0:
                res.append(carry)
            return res;
        def makeList(l):
            head=ListNode(-1)
            temp=head;
            while len(l)>0:
                temp.next=ListNode(l.pop())
                temp=temp.next;
            return head.next;
        return makeList(sumLists(getNumbers(l1),getNumbers(l2)))