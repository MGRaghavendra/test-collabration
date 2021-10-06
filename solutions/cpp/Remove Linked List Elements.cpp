#include <iostream>
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
    ListNode *removeElements(ListNode *head, int val)
    {
        ListNode *prev = NULL, *current = head;
        while (current)
        {
            if (head->val == val)
            {
                head = head->next;
                prev = head;
                current = current->next;
            }
            else if (current->val == val)
            {
                prev->next = current->next;
                current = current->next;
            }
            else
            {
                prev = current;
                current = current->next;
            }
        }
        return head;
    }
};