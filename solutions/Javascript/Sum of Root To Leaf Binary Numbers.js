function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sumRootToLeaf = function (root) {
  l = [];
  getNumbers(root, l, '');
  return l.reduce((a, b) => a + b);
};

function getDecimal(num) {
  let pow = num.length - 1;
  let sum = 0;
  let i = 0;
  while (pow >= 0) {
    sum += Math.pow(2, pow--) * parseInt(num[i++]);
  }
  return sum;
}

function getNumbers(root, l, num, sum) {
  if (root.left || root.right) {
    root.left && Dfs(root.left, l, num + root.val);
    root.right && Dfs(root.right, l, num + root.val);
  } else l.push(getDecimal(num + root.val));
}
