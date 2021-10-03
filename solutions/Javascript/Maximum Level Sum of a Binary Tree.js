function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var maxLevelSum = function (root) {
  if (root === null) return 0;
  let queue = [root];
  let max_sum = root.val;
  let level = 0;
  let max_level = 0;
  while (queue.length > 0) {
    let size = queue.length;
    let sum = 0;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      sum = sum + node.val;
      if (node.left !== null) {
        queue.push(node.left);
      }
      if (node.right !== null) {
        queue.push(node.right);
      }
    }
    level = level + 1;
    if (level === 1 && sum >= max_sum) {
      max_sum = sum;
      max_level = level;
    } else if (sum > max_sum) {
      max_sum = sum;
      max_level = level;
    }
  }
  return max_level;
};
