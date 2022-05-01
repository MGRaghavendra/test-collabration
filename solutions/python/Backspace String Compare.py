class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        [s1,s2,i,j]=[[],[],0,0]
        while i<len(s) or j<len(t):
            if i<len(s) and  s[i] == '#' and len(s1)>0:
                s1.pop()
            if j<len(t) and t[j] == '#' and len(s2)>0:
                s2.pop()
            if i<len(s) and s[i] != '#':
                s1.append(s[i])
            if j<len(t) and t[i] !="#":
                s2.append(t[i])
            i += 1
            j += 1
        return ''.join(s1) == ''.join(s2)
            