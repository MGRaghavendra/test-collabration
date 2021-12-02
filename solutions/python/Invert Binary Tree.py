class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def inverse(root):
            if root==None: return
            left=root.left;
            root.left=root.right;
            root.right=left;
            inverse(root.left);
            inverse(root.right);
        inverse(root)
        return root