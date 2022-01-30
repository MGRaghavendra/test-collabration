function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;
  return checkisSymmetric(root, root);
};

function checkisSymmetric(root1, root2) {
  if (!root1 && !root2) return true;
  if (!root1 || !root2) return false;
  return (
    root1.val === root2.val &&
    checkisSymmetric(root1.left, root2.right) &&
    checkisSymmetric(root1.right, root2.left)
  );
}
