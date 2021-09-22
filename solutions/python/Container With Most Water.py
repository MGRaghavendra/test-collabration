class Solution:
    def maxArea(self, height: List[int]) -> int:
        area=0
        maxarea=0
        left=0
        right=len(height)-1
        x=len(height)-1
        while left < right:
            if height[left]<height[right]:
                area=x*height[left]
                maxarea=max(area,maxarea)
                x=x-1
                left=left+1
            elif height[left]>height[right]:
                area=x*height[right]
                maxarea=max(area,maxarea)
                x=x-1
                right=right-1
            else:
                area=x*height[right]
                maxarea=max(area,maxarea)
                x=x-2
                left=left+1
                right=right-1
        return maxarea
