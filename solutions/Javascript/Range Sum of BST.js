function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  let res = [0];
  range(root, low, high, res);
  return res[0];
};

function range(root, low, high, sum) {
  if (root) {
    if (root.val >= low && root.val <= high) {
      sum[0] = sum[0] + root.val;
    }
    range(root.left, low, high, sum);
    range(root.right, low, high, sum);
  }
}
