#include <map>
#include <vector>
#include <bits/stdc++.h>
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
    ListNode *deleteDuplicates(ListNode *head)
    {
        std::map<int, int> values;
        ListNode *temp = head;
        ListNode *dummy_head = NULL;
        ListNode *dummy_temp = NULL;
        while (temp != NULL)
        {
            if (values.count(temp->val) == 0)
                values[temp->val] = 1;
            else
                values[temp->val] = values[temp->val] + 1;
            temp = temp->next;
        }
        std::vector<int> keys;
        for (auto item : values)
        {
            if (item.second == 1)
                keys.push_back(item.first);
        }
        std::sort(keys.begin(), keys.end());
        for (auto item : keys)
        {
            if (dummy_head == NULL)
            {
                dummy_head = new ListNode(item);
                dummy_temp = dummy_head;
            }
            else
            {
                dummy_temp->next = new ListNode(item);
                dummy_temp = dummy_temp->next;
            }
        }
        return dummy_head;
    }
};