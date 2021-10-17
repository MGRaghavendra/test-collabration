#include <iostream>
class Solution
{
public:
    bool isSubsequence(std::string s, std::string t)
    {
        int i = 0, j = 0, count = 0;
        while (i < s.length() && j < t.length())
        {
            if (s[i] == t[j])
            {
                count++;
                i++;
            }
            j++;
        }
        if (count == s.length())
            return true;
        return false;
    }
};