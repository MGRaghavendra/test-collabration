class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        temp1,temp2=0,0
        i=0
        while i <len(arr)-1:
            if arr[i]==0:
                temp1=arr[i+1]
                arr[i+1]=0
                for j in range(i+2,len(arr)):
                    temp2=arr[j]
                    arr[j]=temp1
                    temp1=temp2
                i=i+2
            else:
                i=i+1
