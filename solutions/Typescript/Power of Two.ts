function helper(i: number, n: number): boolean {
  if (Math.pow(2, i) === n) return true;
  if (Math.pow(2, i) > n) return false;
  return helper(i + 1, n);
}
function isPowerOfTwo(n: number): boolean {
  return helper(0, n);
}
