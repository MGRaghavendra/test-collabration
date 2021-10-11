class Solution:
    def getCount(self,jewel:str,stones:str)->int:
            [i,j,count]=[0,len(stones)-1,0]
            while  i<=j:
                if i==j:
                    if stones[i]==jewel:
                        count=count+1
                else:
                    if stones[i]==jewel:
                        count=count+1
                    if stones[j]==jewel:
                        count=count+1
                i=i+1
                j=j-1
            return count

    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        [i,j,count]=[0,len(jewels)-1,0]
        while i<=j:
            if i==j:
                count=count+self.getCount(jewels[i],stones)
            else:
                count=count+self.getCount(jewels[i],stones)
                count=count+self.getCount(jewels[j],stones)
            i=i+1
            j=j-1
        return count
