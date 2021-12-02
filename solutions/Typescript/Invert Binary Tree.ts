class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invert(node: null | TreeNode) {
  if (node === null) return;
  let left: null | TreeNode = node.left;
  let right: null | TreeNode = node.right;
  node.left = right;
  node.right = left;
  invert(right);
  invert(left);
}

function invertTree(root: TreeNode | null): TreeNode | null {
  invert(root);
  return root;
}
