#include <vector>
class Solution
{
public:
    void helper(int i, int j, std::vector<char> &s)
    {
        if (i >= j)
            return;
        else
        {
            char temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            return helper(i + 1, j - 1, s);
        }
    }
    void reverseString(std::vector<char> &s)
    {
        helper(0, s.size() - 1, s);
    }
};