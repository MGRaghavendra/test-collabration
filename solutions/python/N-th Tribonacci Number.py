class Solution:
    def tribonacci(self, n: int) -> int:
        if n==0:
            return 0;
        fibos=[0,1,1]
        while len(fibos)<=n:
            fibos.append(fibos[len(fibos)-1]+fibos[len(fibos)-2]+fibos[len(fibos)-3])
        return fibos[len(fibos)-1]