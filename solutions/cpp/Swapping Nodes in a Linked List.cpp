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
    ListNode *swapNodes(ListNode *head, int k)
    {
        vector<int> v;
        ListNode *temp = head, *current = head;
        int i = 0, count = 0;
        while (temp)
        {
            v.push_back(temp->val);
            count++;
            temp = temp->next;
        }
        swap(k - 1, count - k, v);
        while (current)
        {
            current->val = v[i];
            i++;
            current = current->next;
        }
        return head;
    }

    void swap(int i, int j, vector<int> &v)
    {
        int temp = v[i];
        v[i] = v[j];
        v[j] = temp;
    }
};