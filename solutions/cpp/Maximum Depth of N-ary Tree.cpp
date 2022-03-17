#include <stdio.h>
#include <vector>
using namespace std;
class Node
{
public:
    int val;
    vector<Node *> children;

    Node() {}

    Node(int _val)
    {
        val = _val;
    }

    Node(int _val, vector<Node *> _children)
    {
        val = _val;
        children = _children;
    }
};

class Solution
{
public:
    int maxDepth(Node *root)
    {
        vector<int> maxdepth = {0};
        dfs(root, 0, maxdepth);
        return maxdepth[0];
    }
    void dfs(Node *root, int depth, vector<int> &maxdepth)
    {
        if (root == NULL)
            return;
        depth = depth + 1;
        if (maxdepth[0] < depth)
        {
            maxdepth[0] = depth;
        }
        for (int i = 0; i < root->children.size(); i++)
        {
            dfs(root->children[i], depth, maxdepth);
        }
    }
};