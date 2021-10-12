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

function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0;
  let queue: TreeNode[] = [root],
    depth: number = 0;
  while (queue.length > 0) {
    let size: number = queue.length,
      i: number = 0;
    while (i < size) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      i = i + 1;
    }
    depth = depth + 1;
  }
  return depth;
}
