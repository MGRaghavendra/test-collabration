var isSubsequence = function (s, t) {
  let i = 0,
    j = 0,
    count = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      count = count + 1;
      i = i + 1;
    }
    j = j + 1;
  }
  if (count === s.length) return true;
  return false;
};
