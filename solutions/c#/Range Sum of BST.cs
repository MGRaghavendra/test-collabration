
 public class TreeNode {
      public int val;
      public TreeNode left;
      public TreeNode right;
      public TreeNode(int val=0, TreeNode left=null, TreeNode right=null) {
          this.val = val;
          this.left = left;
         this.right = right;
    }
}
public class Solution {
    public int RangeSumBST(TreeNode root, int low, int high) {
        int[] res= new int[1];
        res[0]=0;
        range(root,low,high,res);
        return res[0];
    }
    public void range(TreeNode root,int low,int high,int[] arr){
        if(root!=null){
            if(root.val>=low && root.val<=high){
                arr[0]+=root.val;
            }
            range(root.left,low,high,arr);
            range(root.right,low,high,arr);
        }
    }
}