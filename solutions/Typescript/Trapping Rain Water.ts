function trap(height: number[]): number {
  let left: number[] = new Array(height.length).fill(0);
  let right: number[] = new Array(height.length).fill(0);
  let water: number = 0;
  left[0] = height[0];
  for (let i = 1; i < height.length; i++)
    left[i] = Math.max(height[i], left[i - 1]);
  right[height.length - 1] = height[height.length - 1];
  for (let i = height.length - 2; i >= 0; i--)
    right[i] = Math.max(height[i], right[i + 1]);
  for (let i = 0; i < height.length; i++)
    water = water + Math.min(left[i], right[i]) - height[i];
  return water;
}
