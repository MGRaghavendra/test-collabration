# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def flatten(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        '''
        #Recursively
        if root:
            temp_left=root.left
            temp_right=root.right
            root.left=None
            self.flatten(temp_left)
            self.flatten(temp_right)
            root.right=temp_left
            current=root
            while(current.right):
                current=current.right
            current.right=temp_right
            '''
        stack=[]
        while root:
            if root.right:
                stack.append(root.right)
            if root.left:
                stack.append(root.left)
            root.left=None
            temp=stack.pop() if len(stack)>0 else None
            root.right=temp
            root=temp