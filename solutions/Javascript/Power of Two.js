var isPowerOfTwo = function (n) {
  function helper(i, n) {
    if (Math.pow(2, i) === n) return true;
    if (Math.pow(2, i) > n) return false;
    return helper(i + 1, n);
  }
  return helper(0, n);
};
