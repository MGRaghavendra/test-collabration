class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def swapNodes(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        [temp,current,i,count,arr]=[head,head,0,0,[]]
        while temp:
            arr.append(temp.val)
            temp=temp.next
            count=count+1
        arr[k-1],arr[count-k]=arr[count-k],arr[k-1]
        while current:
            current.val=arr[i]
            i=i+1
            current=current.next;
        return head;