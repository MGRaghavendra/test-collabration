var reverseString = function (s) {
  function helper(i, j, s) {
    if (i >= j) return s;
    else {
      let temp = s[i];
      s[i] = s[j];
      s[j] = temp;
      return helper(i + 1, j - 1, s);
    }
  }
  return helper(0, s.length - 1, s);
};
