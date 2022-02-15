function Node(val, children) {
  this.val = val;
  this.children = children;
}

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {
  let res = [];
  helper(root, res);
  return res;
};

function helper(root, arr) {
  if (root === null) {
    return;
  } else {
    if (root.children.length > 0) {
      for (let i = 0; i < root.children.length; i++) {
        helper(root.children[i], arr);
      }
    }
    arr.push(root.val);
  }
}
