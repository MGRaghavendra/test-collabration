class Solution:
    def makeRow(self,row:List[int])->List[int]:
        i=0
        j=len(row)
        res=[]
        while i<=j:
            if i==0:
                res.append(row[i])
            elif i<j:
                res.append(row[i-1]+row[i])
            else:
                res.append(row[i-1])
            i=i+1
        return res
    def generate(self, numRows: int) -> List[List[int]]:
        triangle=[[1]]
        while len(triangle)<numRows:
            triangle.append(self.makeRow(triangle[len(triangle)-1]))
        return triangle