#include <vector>
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
    ListNode *merge(ListNode *a, ListNode *b)
    {
        ListNode *dummy = new ListNode(0);
        ListNode *temp = dummy;
        while (a && b)
        {
            if (a->val < b->val)
            {
                temp->next = new ListNode(a->val);
                temp = temp->next;
                a = a->next;
            }
            else
            {
                temp->next = new ListNode(b->val);
                temp = temp->next;
                b = b->next;
            }
        }

        while (a)
        {
            temp->next = new ListNode(a->val);
            temp = temp->next;
            a = a->next;
        }

        while (b)
        {
            temp->next = new ListNode(b->val);
            temp = temp->next;
            b = b->next;
        }
        return dummy->next;
    };

    ListNode *mergeKLists(vector<ListNode *> &lists)
    {
        if (lists.size() == 0)
            return NULL;
        int last = lists.size() - 1;
        while (last != 0)
        {
            int i = 0;
            int j = last;
            while (i < j)
            {
                lists[i] = merge(lists[i], lists[j]);
                i++;
                j--;
                if (i >= j)
                    last = j;
            }
        }
        return lists[0];
    }
};