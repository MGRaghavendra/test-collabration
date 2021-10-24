class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeInBetween(self, list1: ListNode, a: int, b: int, list2: ListNode) -> ListNode:
        [i,left,right,middle]=[0,list1,list1,list2]
        while i<=b:
            right=right.next
            i=i+1
        while middle.next:
            middle=middle.next
        middle.next=right
        i=0
        while i<a-1:
            left=left.next;
            i=i+1
        left.next=list2
        return list1