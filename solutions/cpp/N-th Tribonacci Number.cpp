#include <vector>
class Solution
{
public:
    int tribonacci(int n)
    {
        if (n < 1)
            return 0;
        std::vector<int> nums = {0, 1, 1};
        while (nums.size() <= n)
        {
            nums.push_back(nums[nums.size() - 1] + nums[nums.size() - 2] + nums[nums.size() - 3]);
        }
        return nums[nums.size() - 1];
    }
};