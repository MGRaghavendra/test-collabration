class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        res=""
        while head:
            res=res+str(head.val)
            head=head.next
        if res[0::]==res[::-1]:
            return True
        return False