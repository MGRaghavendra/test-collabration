class Solution
{
public:
    int subtractProductAndSum(int n)
    {
        int pnum = n, snum = n, p = 1, s = 0;
        while (pnum > 0)
        {
            p = p * (pnum % 10);
            pnum = pnum / 10;
        }
        while (snum > 0)
        {
            s = s + (snum % 10);
            snum = snum / 10;
        }
        return p - s;
    }
};