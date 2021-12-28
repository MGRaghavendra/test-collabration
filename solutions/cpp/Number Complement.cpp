#include <string>
#include <math.h>
using namespace std;
class Solution
{
public:
    int getBinaryNumber(string num)
    {
        int i = num.length() - 1;
        int sum = 0;
        int Pow = 0;
        while (i >= 0)
        {
            int n = num[i] - '0';
            sum = sum + n * pow(2, Pow);
            i = i - 1;
            Pow = Pow + 1;
        }
        return sum;
    }
    string getRemainder(int num)
    {
        if (num % 2 == 1)
            return "0";
        else
            return "1";
    }
    int findComplement(int num)
    {
        string bin_num = "";
        while (num > 0)
        {
            bin_num = getRemainder(num) + bin_num;

            num = num / 2;
        }
        return getBinaryNumber(bin_num);
    }
};