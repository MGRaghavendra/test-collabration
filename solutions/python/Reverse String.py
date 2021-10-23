class Solution:
    def reverseString(self, s: List[str]) -> None:
        def helper(i:int,j:int,s:str):
            if i>= j:
                return s
            else:
                temp=s[i]
                s[i]=s[j]
                s[j]=temp
                return helper(i+1,j-1,s)
        helper(0,len(s)-1,s)