function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var maxDepth = function (root) {
  if (root == null) return 0;
  let queue = [root],
    depth = 0;
  while (queue.length > 0) {
    let size = queue.length,
      i = 0;
    while (i < size) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      i = i + 1;
    }
    depth = depth + 1;
  }
  return depth;
};
