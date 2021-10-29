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
    ListNode *oddEvenList(ListNode *head)
    {
        if (!head)
            return NULL;
        if (!head->next)
            return head;
        ListNode *odd = NULL, *temp = head;
        ListNode *eve = NULL, *eveHead = NULL, *oddHead = NULL, *last = NULL;
        while (temp && temp->next)
        {
            ListNode *current = temp->next->next, *node1 = temp, *node2 = temp->next;
            if (odd == NULL)
            {
                oddHead = node1;
                odd = oddHead;
                odd->next = NULL;
            }
            else
            {
                odd->next = node1;
                odd = odd->next;
                odd->next = NULL;
            }
            if (eve == NULL)
            {
                eveHead = node2;
                eve = eveHead;
                eve->next = NULL;
            }
            else
            {
                eve->next = node2;
                eve = eve->next;
                eve->next = NULL;
            }
            temp = current;
        }
        if (temp != NULL)
        {
            odd->next = temp;
            odd = odd->next;
            odd->next = NULL;
        }
        odd->next = eveHead;
        return oddHead;
    }
};