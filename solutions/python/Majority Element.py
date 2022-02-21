class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        dict={}
        count=0
        res=0
        for num in nums:
            if num in dict:
                dict[num]+=1
            else:
                dict[num]=1
            if count < dict[num]:
                count=dict[num];
                res=num
        return res;