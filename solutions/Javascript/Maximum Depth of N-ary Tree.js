function Node(val, children) {
  this.val = val;
  this.children = children;
}

var maxDepth = function (root) {
  let maxdepth = [0];
  let depth = 0;
  dfs(root, depth, maxdepth);
  return maxdepth[0];
};
function dfs(root, depth, maxdepth) {
  if (root === null) return null;
  depth = depth + 1;
  if (maxdepth[0] < depth) {
    maxdepth[0] = depth;
  }
  for (let i = 0; i < root.children.length; i++) {
    dfs(root.children[i], depth, maxdepth);
  }
}
