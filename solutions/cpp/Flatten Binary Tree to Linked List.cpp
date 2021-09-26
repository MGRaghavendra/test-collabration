#include <iostream>
#include <stack>
struct TreeNode
{
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution
{
public:
    void flatten(TreeNode *root)
    {
        std::stack<TreeNode *> stack;
        while (root)
        {
            if (root->right)
            {
                stack.push(root->right);
            }
            if (root->left)
            {
                stack.push(root->left);
            }
            root->left = NULL;
            TreeNode *temp;
            if (!stack.empty())
            {
                temp = stack.top();
                stack.pop();
                root->right = temp;
                root = temp;
            }
            else
            {
                root->right = NULL;
                root = NULL;
            }
        }
    }
};