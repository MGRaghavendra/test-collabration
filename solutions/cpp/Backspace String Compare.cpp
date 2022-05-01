#include <stdio.h>
#include <stack>
#include <string>
using namespace std;
class Solution
{
public:
    bool backspaceCompare(string s, string t)
    {
        stack<char> s1;
        stack<char> s2;
        addchars(s, s1);
        addchars(t, s2);
        string str1 = "", str2 = "";
        getString(str1, s1);
        getString(str2, s2);
        return str1 == str2;
    }

    void addchars(string s, stack<char> &stack)
    {
        for (int i = 0; i < s.length(); i++)
        {
            if (s[i] == '#' && !stack.empty())
            {
                stack.pop();
            }
            else if (s[i] != '#')
            {
                stack.push(s[i]);
            }
        }
    }

    void getString(string &s, stack<char> &stack)
    {
        while (!stack.empty())
        {
            s += stack.top();
            stack.pop();
        }
    }
};