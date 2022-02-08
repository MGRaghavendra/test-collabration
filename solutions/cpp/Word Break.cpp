#include <vector>
#include <string>
#include <map>
#include <set>
using namespace std;
class Solution
{
    map<int, bool> memo;
    set<string> words;

public:
    bool wordBreak(string s, vector<string> &wordDict)
    {
        for (auto word : wordDict)
            words.insert(word);
        return Break(s, 0);
    }
    bool Break(string s, int pos)
    {
        if (pos == s.length())
            return true;
        if (memo.count(pos))
            return memo[pos];
        for (int i = pos; i < s.length(); i++)
        {
            if (words.count(s.substr(pos, i - pos + 1)) > 0 && Break(s, i + 1))
                return memo[pos] = true;
        }
        return memo[pos] = false;
    }
};
