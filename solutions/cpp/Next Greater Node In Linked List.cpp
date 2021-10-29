#include <vector>
#include <stack>
using namespace std;
struct ListNode
{
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution
{
public:
    vector<int> nextLargerNodes(ListNode *head)
    {
        vector<int> v;
        ListNode *temp = head;
        while (temp)
        {
            v.push_back(temp->val);
            temp = temp->next;
        }
        updateVector(v);
        return v;
    }

    void updateVector(vector<int> &v)
    {
        stack<vector<int>> s;
        for (int i = 0; i < v.size(); i++)
        {
            while (!s.empty())
            {
                if (s.top()[1] < v[i])
                {
                    v[s.top()[0]] = v[i];
                    s.pop();
                }
                else
                    break;
            }
            s.push({i, v[i]});
        }
        while (!s.empty())
        {
            v[s.top()[0]] = 0;
            s.pop();
        }
    }
};