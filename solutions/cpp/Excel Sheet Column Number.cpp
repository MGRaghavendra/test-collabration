#include <map>
#include <string>
using namespace std;
class Solution
{
public:
    int titleToNumber(string columnTitle)
    {
        map<char, int> dict;
        int s = 0, p = columnTitle.length() - 1;
        for (int i = 0; i < columnTitle.length(); i++)
            s = s + pow(26, p--) * (columnTitle[i] - 'A' + 1);
        return s;
    }
};
