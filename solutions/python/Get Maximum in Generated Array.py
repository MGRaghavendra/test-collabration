class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        nums=[0,1]
        i=1
        Max=0
        if n==0:
            return 0
        if n==1 or n==2:
            return 1
        while len(nums)<n:
            nums.append(nums[i])
            nums.append(nums[i+1]+nums[i])
            Max=max(max(nums[len(nums)-1],nums[len(nums)-2]),Max)
            i=i+1
        return Max