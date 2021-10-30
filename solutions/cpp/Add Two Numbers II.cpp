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
    vector<int> getNumbers(ListNode *node)
    {
        vector<int> nums;
        while (node)
        {
            nums.push_back(node->val);
            node = node->next;
        }
        return nums;
    }

    vector<int> sumArray(vector<int> l1, vector<int> l2)
    {
        vector<int> res;
        int i = l1.size() - 1, j = l2.size() - 1, sum = 0, carry = 0;
        while (i >= 0 || j >= 0)
        {
            int a = 0, b = 0;
            if (i >= 0)
                a = l1[i];
            if (j >= 0)
                b = l2[j];
            sum = a + b + carry;
            res.push_back(sum % 10);
            carry = sum / 10;
            i = i - 1;
            j = j - 1;
        }
        if (carry > 0)
            res.push_back(carry);
        return res;
    }

    ListNode *makeList(vector<int> l)
    {
        ListNode *head = new ListNode(-1);
        ListNode *temp = head;
        for (int i = l.size() - 1; i >= 0; i--)
        {
            temp->next = new ListNode(l[i]);
            temp = temp->next;
        }
        return head->next;
    }

    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        return makeList(sumArray(getNumbers(l1), getNumbers(l2)));
    }
};