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
    ListNode *mergeInBetween(ListNode *list1, int a, int b, ListNode *list2)
    {
        ListNode *left = list1;
        ListNode *right = list1;
        ListNode *middle = list2;
        int i = 0;
        while (i <= b)
        {
            right = right->next;
            i = i + 1;
        }
        while (middle->next)
            middle = middle->next;
        middle->next = right;
        i = 0;
        while (i < a - 1)
        {
            left = left->next;
            i = i + 1;
        }
        left->next = list2;
        return list1;
    }
};