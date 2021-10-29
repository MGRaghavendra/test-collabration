#include <unordered_set>
using namespace std;
struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
public:
    ListNode *detectCycle(ListNode *head)
    {
        unordered_set<ListNode *> s;
        ListNode *temp = head;
        while (temp)
        {
            if (s.find(temp) != s.end())
                return temp;
            else
                s.insert(temp);
            temp = temp->next;
        }
        return NULL;
    }
};