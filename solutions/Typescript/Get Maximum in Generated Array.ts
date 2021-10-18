function getMaximumGenerated(n: number): number {
  let nums: number[] = [0, 1],
    i: number = 1,
    max: number = 0;
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  while (nums.length < n) {
    nums[2 * i] = nums[i];
    nums[2 * i + 1] = nums[i] + nums[i + 1];
    if (max <= nums[2 * i]) max = nums[2 * i];
    if (max <= nums[2 * i + 1]) max = nums[2 * i + 1];
    i = i + 1;
  }
  return max;
}
