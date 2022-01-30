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

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  return checkisSymmetric(root, root);
}

function checkisSymmetric(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  return (
    root1.val === root2.val &&
    checkisSymmetric(root1.left, root2.right) &&
    checkisSymmetric(root1.right, root2.left)
  );
}
