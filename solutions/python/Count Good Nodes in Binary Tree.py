class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        return self.Dfs(root,root.val);
    def Dfs(self,root,val):
        if not root:
            return 0;
        res=1 if root.val >= val else 0;
        val=root.val if(root.val>=val) else val;
        return res+self.Dfs(root.left,val)+self.Dfs(root.right,val);