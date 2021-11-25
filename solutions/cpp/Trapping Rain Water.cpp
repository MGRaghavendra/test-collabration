#include <vector>
using namespace std;
class Solution
{
public:
    int min(int a, int b)
    {
        return a < b ? a : b;
    }
    int max(int a, int b)
    {
        return a > b ? a : b;
    }
    int trap(vector<int> &height)
    {
        vector<int> left, right;
        int water = 0;
        for (int i = 0; i < height.size(); i++)
        {
            left.push_back(0);
            right.push_back(0);
        }
        left[0] = height[0];
        for (int i = 1; i < height.size(); i++)
            left[i] = max(height[i], left[i - 1]);

        right[height.size() - 1] = height[height.size() - 1];
        for (int j = height.size() - 2; j >= 0; j--)
            right[j] = max(right[j + 1], height[j]);

        for (int i = 0; i < height.size(); i++)
            water = water + min(left[i], right[i]) - height[i];
        return water;
    }
};