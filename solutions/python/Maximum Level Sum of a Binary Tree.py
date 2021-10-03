
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        queue=[root]
        max_level=0
        level=0
        max_sum=root.val
        while queue:
            size=len(queue)
            _sum=0
            for i in range(size):
                node=queue.pop(0)
                _sum=_sum+node.val
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            level=level+1
            if level==1 and _sum>=max_sum:
                max_level=level
                max_sum=_sum
            elif _sum>max_sum:
                max_sum=_sum
                max_level=level
        return max_level

