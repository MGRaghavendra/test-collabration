/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let res = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) res[k++] = nums1[i++];
    else res[k++] = nums2[j++];
  }
  while (i < m) res[k++] = nums1[i++];

  while (j < n) res[k++] = nums2[j++];

  for (i = 0; i < nums1.length; i++) nums1[i] = res[i];
};
