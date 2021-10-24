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
    ListNode *swapPairs(ListNode *head)
    {
        if (!head)
            return NULL;
        if (!head->next)
            return head;
        std::stack<ListNode *> s;
        ListNode *last_node = NULL;
        ListNode *temp = NULL;
        while (head)
        {
            ListNode *temp = head->next;
            head->next = NULL;
            s.push(head);
            head = temp;
        }
        if (s.size() % 2 != 0)
        {
            last_node = s.top();
            s.pop();
        }
        while (s.size() > 0)
        {
            ListNode *node1 = s.top();
            s.pop();
            ListNode *node2 = s.top();
            s.pop();
            if (temp == NULL)
            {
                node1->next = node2;
                temp = node1;
            }
            else
            {
                node2->next = temp;
                node1->next = node2;
                temp = node1;
            }
        }
        if (last_node)
        {
            ListNode *current = temp;
            while (current->next)
                current = current->next;
            current->next = last_node;
        }
        return temp;
    }
};