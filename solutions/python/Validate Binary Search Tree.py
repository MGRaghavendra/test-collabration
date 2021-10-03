class Node:
    def __init__(self,data):
        this.left=None
        this.right=None
        this.val=data

def isValidBST(root:Node)->bool:
    return helper(root,None,None)
def helper(root,left,right):
    if root==None:
         return True
    elif left!=None and root.left>left or right!=None and root.right<right:
        return False
    else:
        return helper(root,root.left,right) and helper(root.right,left,root.right)




