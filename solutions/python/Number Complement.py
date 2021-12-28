class Solution:
    def getBinaryNumber(self,bin_number:str)->int:
        sum=0
        i=len(bin_number)-1;
        Pow=0
        while(i>=0):
            sum=sum+(int(bin_number[i])*pow(2,Pow))
            Pow+=1
            i-=1;
        return sum;
    def findComplement(self, num: int) -> int:
        bin_num=""
        while(num>0):
            rem=num%2
            if rem==1:
                rem="0"
            if rem==0:
                rem="1"
            bin_num=rem+bin_num
            num=num//2;
        return self.getBinaryNumber(bin_num)
