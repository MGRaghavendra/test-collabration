function majorityElement(nums: number[]): number {
  let ele = {};
  let res: number = 0;
  let count: number = 0;
  for (let num of nums) {
    if (ele[num] === undefined) {
      ele[num] = 1;
    } else {
      ele[num] += 1;
    }
    if (count < ele[num]) {
      res = num;
      count = ele[num];
    }
  }
  return res;
}
