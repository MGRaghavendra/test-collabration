#include <stdio.h>
using namespace std;
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
    int goodNodes(TreeNode *root)
    {
        return Dfs(root, root->val);
    }

    int Dfs(TreeNode *root, int val)
    {
        if (root == NULL)
        {
            return 0;
        }
        int res = 0;
        if (root->val >= val)
        {
            val = root->val;
            res = 1;
        }
        return res + Dfs(root->left, val) + Dfs(root->right, val);
    }
};