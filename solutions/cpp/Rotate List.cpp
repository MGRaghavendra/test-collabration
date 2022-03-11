#include <stdio.h>
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
    ListNode *rotateRight(ListNode *head, int k)
    {
        if (head == NULL || head->next == NULL || k == 0)
            return head;
        int len = 1;
        ListNode *temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
            len++;
        }
        temp->next = head;
        k = k % len;
        k = len - k;
        ListNode *curr = head;
        while (k > 1)
        {
            curr = curr->next;
            k = k - 1;
        }
        head = curr->next;
        curr->next = NULL;
        return head;
    }
};