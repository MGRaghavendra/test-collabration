class Solution
{
public:
    bool isPowerOfTwo(int n)
    {
        unsigned int i = 1;
        if (n < 0)
            return false;
        while (true)
        {
            if (i == n)
                return true;
            if (i > n)
                return false;
            i = i << 1;
        }
    }
};