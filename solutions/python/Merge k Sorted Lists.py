class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def merge(self,l1,l2):
        node=ListNode(0)
        temp=node

        while l1 and l2:
            if l1.val<=l2.val:
                temp.next=ListNode(l1.val)
                temp=temp.next
                l1=l1.next
            else:
                temp.next=ListNode(l2.val)
                temp=temp.next
                l2=l2.next
        while l1:
            temp.next=ListNode(l1.val)
            l1=l1.next
            temp=temp.next
        while l2:
            temp.next=ListNode(l2.val)
            l2=l2.next
            temp=temp.next
        return node.next

    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        if len(lists)==0:
            return None
        i=0
        last=len(lists)-1

        while last!=0:
            i=0
            j=last
            while i < j:
                lists[i]=self.merge(lists[i],lists[j])
                i=i+1
                j=j-1
                if(i>=j):
                    last=j;
        return lists[0]
