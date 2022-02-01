class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        [i,j,a]=[0,0,[]]
        while i<m and j<n:
            if nums1[i]<nums2[j]:
                a.append(nums1[i])
                i=i+1;
            else:
                a.append(nums2[j])
                j=j+1;
        while i<m:
            a.append(nums1[i])
            i=i+1;
        while j<n:
            a.append(nums2[j])
            j=j+1;
        for i in range(0,len(nums1)):
            nums1[i]=a[i];