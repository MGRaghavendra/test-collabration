#include <iostream>
struct ListNode
{
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution
{
public:
    int getlength(ListNode *node)
    {
        int count = 0;
        while (node)
        {
            count++;
            node = node->next;
        }
        return count;
    }
    ListNode *getNode(int d, ListNode *head1, ListNode *head2)
    {
        ListNode *current1 = head1;
        ListNode *current2 = head2;
        for (int i = 0; i < d; i++)
        {
            if (current1)
                current1 = current1->next;
        }
        while (current1 != NULL && current2 != NULL)
        {
            if (current1 == current2)
                return current1;
            current1 = current1->next;
            current2 = current2->next;
        }
        return NULL;
    }
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB)
    {
        int a = getlength(headA);
        int b = getlength(headB);
        if (a > b)
        {
            int d = a - b;
            return getNode(d, headA, headB);
        }
        else
        {
            int d = b - a;
            return getNode(d, headB, headA);
        }
    }
};