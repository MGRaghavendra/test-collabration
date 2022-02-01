function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let res: number[] = [];
  let i: number = 0,
    j: number = 0,
    k: number = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) res[k++] = nums1[i++];
    else res[k++] = nums2[j++];
  }
  while (i < m) res[k++] = nums1[i++];

  while (j < n) res[k++] = nums2[j++];

  for (i = 0; i < nums1.length; i++) nums1[i] = res[i];
}
