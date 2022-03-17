class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children


class Solution:
    def maxDepth(self, root: 'Node') -> int:
        depth=0
        maxdepth=[0];
        self.dfs(root,depth,maxdepth)
        return maxdepth[0];
    def dfs(self,root,depth,maxdepth):
        if not root:
            return None;
        depth=depth+1;
        maxdepth[0]=max(maxdepth[0],depth)
        for i in range(0,len(root.children)):
            self.dfs(root.children[i],depth,maxdepth)