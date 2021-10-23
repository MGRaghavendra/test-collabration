class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        def helper(i,n):
            if math.pow(2,i)==n:
                return True
            if math.pow(2,i)>n:
                return False
            return helper(i+1,n)
        return helper(0,n)