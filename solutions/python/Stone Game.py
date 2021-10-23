class Solution:
    def stoneGame(self, piles: List[int]) -> bool:
        piles.sort(reverse=True)
        [ac,bc,i]=[0,0,0]
        while i<len(piles):
            ac=ac+piles[i]
            bc=bc+piles[i+1]
            i=i+2
        return ac>bc