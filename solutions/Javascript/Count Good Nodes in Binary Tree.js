function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var goodNodes = function (root) {
  function dfs(node, val) {
    if (!node) return 0;
    let res = 0;
    if (node.val >= val) {
      val = node.val;
      res = 1;
    }
    return res + dfs(node.left, val) + dfs(node.right, val);
  }
  return dfs(root, root.val);
};
