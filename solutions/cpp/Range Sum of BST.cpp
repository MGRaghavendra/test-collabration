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
    int rangeSumBST(TreeNode *root, int low, int high)
    {
        int arr[1];
        arr[0] = 0;
        range(root, low, high, &arr[0]);
        return arr[0];
    }
    void range(TreeNode *root, int low, int high, int *arr)
    {
        if (root)
        {
            if (root->val >= low && root->val <= high)
                arr[0] += root->val;
            range(root->left, low, high, arr);
            range(root->right, low, high, arr);
        }
    }
};