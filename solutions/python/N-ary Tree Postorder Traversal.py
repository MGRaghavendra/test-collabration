
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children


class Solution:
    def postorder(self, root: 'Node') -> List[int]:
        res=[]
        self.helper(root,res);
        return res;
    def helper(self,root,arr):
        if root:
            for i in range(0,len(root.children)):
                self.helper(root.children[i],arr)
            arr.append(root.val)