class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def rangeSumBST(self, root: TreeNode, low: int, high: int) -> int:
        #DFS
        sum=0
        queue=[]
        queue.append(root)
        while len(queue)>0:
            node=queue.pop(0)
            if node.val>=low and node.val<=high:
                sum=sum+node.val
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        return sum
        #----------------------
        #BFS
        # sum=0
        # stack=[]
        # while(root or len(stack)>0):
        #     while(root):
        #         stack.append(root)
        #         root=root.left
        #     node=stack.pop()
        #     if node.val>=low and node.val<=high:
        #         sum=sum+node.val
        #     root=node.right
        # return sum


