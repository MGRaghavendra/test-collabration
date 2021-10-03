function Node(data) {
  this.left = null;
  this.right = null;
  this.val = data;
}

var isValidBST = (root) => {
  function helper(root, left, right) {
    if (root === null) return true;
    else if (
      (left != null && left < root.val) ||
      (right != null && right > root.val)
    )
      return false;
    else
      return (
        helper(root.left, root.value, right) &&
        helper(root.right, left, root.right)
      );
  }
  return helper(root, null, null);
};
