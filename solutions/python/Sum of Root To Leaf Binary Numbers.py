class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def sumRootToLeaf(self, root: Optional[TreeNode]) -> int:
        l=[]
        self.getNumbers(root,l,'');
        sum=0
        for num in l:
            sum=sum+num;
        return sum;
    def getNumbers(self,root,l,num):
        if root.left or root.right:
            if root.left:
                self.getNumbers(root.left,l,num+str(root.val));
            if root.right:
                self.getNumbers(root.right,l,num+str(root.val));
        else:
            l.append(self.getDecimal(num+str(root.val)));
    def getDecimal(self,num):
        _pow=len(num)-1;
        i=0;
        sum=0;
        while i<len(num):
            sum=sum+(pow(2,_pow))*int(num[i]);
            _pow=_pow-1;
            i=i+1;
        return sum;