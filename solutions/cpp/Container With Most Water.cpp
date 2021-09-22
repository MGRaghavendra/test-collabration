#include <vector>
using namespace std;
class Solution
{
public:
    int maxnum(int a, int b)
    {
        return a > b ? a : b;
    }
    int maxArea(vector<int> &height)
    {
        int area = 0, maxarea = 0, left = 0, right = height.size() - 1, x = height.size() - 1;
        while (left < right)
        {
            if (height[left] < height[right])
            {
                area = height[left] * x;
                maxarea = maxnum(area, maxarea);
                left = left + 1;
                x = x - 1;
            }
            else if (height[left] > height[right])
            {
                area = height[right] * x;
                maxarea = maxnum(area, maxarea);
                right = right - 1;
                x = x - 1;
            }
            else
            {
                area = height[right] * x;
                maxarea = maxnum(area, maxarea);
                right = right - 1;
                left = left + 1;
                x = x - 2;
            }
        }
        return maxarea;
    }
};