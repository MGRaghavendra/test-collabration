/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let ele = {};
  let res = 0;
  let count = 0;
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
};
