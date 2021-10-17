function isSubsequence(s: string, t: string): boolean {
  let i: number = 0,
    j: number = 0,
    count: number = 0;
  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      count = count + 1;
      i = i + 1;
    }
    j = j + 1;
  }
  if (count === s.length) return true;
  return false;
}
