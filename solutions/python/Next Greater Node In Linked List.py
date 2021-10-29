class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def nextLargerNodes(self, head: Optional[ListNode]) -> List[int]:
        [stack,arr,temp,i]=[[],[],head,0]
        while temp:
            arr.append(temp.val)
            temp=temp.next;
        for i in range(0,len(arr)):
            while len(stack)>0 and arr[stack[-1]]<arr[i]:
                arr[stack[-1]]=arr[i]
                stack.pop()
            stack.append(i)
        while len(stack)>0:
            arr[stack.pop()]=0
        return arr