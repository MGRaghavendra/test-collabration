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

function maxLevelSum(root: TreeNode | null): number {
  if (root === null) return 0;
  let queue: TreeNode[] = [root];
  let max_sum: number = root.val;
  let level: number = 0;
  let max_level: number = 0;
  while (queue.length > 0) {
    let size: number = queue.length;
    let sum: number = 0;
    for (let i: number = 0; i < size; i++) {
      let node: TreeNode = queue.shift();
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
}
