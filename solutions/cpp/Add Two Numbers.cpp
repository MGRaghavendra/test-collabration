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
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2)
    {
        int sum = 0, v1 = 0, v2 = 0, carry = 0;
        ListNode *head = new ListNode(-1);
        ListNode *temp = head;

        while (l1 != NULL || l2 != NULL)
        {
            v1 = (l1 != NULL) ? l1->val : 0;
            v2 = (l2 != NULL) ? l2->val : 0;
            sum = v1 + v2 + carry;
            carry = sum / 10;
            sum = sum % 10;
            temp->next = new ListNode(sum);
            temp = temp->next;
            if (l1)
                l1 = l1->next;
            if (l2)
                l2 = l2->next;
        }
        if (carry != 0)
            temp->next = new ListNode(carry);

        return head->next;
    }
};