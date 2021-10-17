class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        [i,j,count]=[0,0,0]
        while i<len(s) and j<len(t):
            if s[i]==t[j]:
                count=count+1
                i=i+1
            j=j+1
        if count==len(s): return True
        return False