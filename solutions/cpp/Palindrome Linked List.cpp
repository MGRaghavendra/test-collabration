#include <stack>
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
    bool isPalindrome(ListNode *head)
    {
        std::stack<ListNode *> s;
        ListNode *dummy = head;
        while (dummy)
        {
            s.push(dummy);
            dummy = dummy->next;
        }
        while (head)
        {
            ListNode *node = s.top();
            if (node->val != head->val)
                return false;
            s.pop();
            head = head->next;
        }
        return true;
    }
};