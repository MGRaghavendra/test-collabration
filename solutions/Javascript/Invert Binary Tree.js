class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invert(node) {
  if (node === null) return;
  let left = node.left;
  let right = node.right;
  node.left = right;
  node.right = left;
  invert(right);
  invert(left);
}
var invertTree = function (root) {
  invert(root);
  return root;
};
