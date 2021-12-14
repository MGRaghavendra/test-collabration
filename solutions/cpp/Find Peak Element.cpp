#include <vector>
class Solution
{
public:
    int findPeakElement(std::vector<int> &nums)
    {
        if (nums.size() == 1)
            return 0;
        int left = 0, right = nums.size() - 1, n = nums.size() - 1;
        while (left <= right)
        {
            int mid = (left + right) / 2;
            if (mid == 0 && nums[mid] > nums[mid + 1])
                return mid;
            if (mid == n && nums[mid] > nums[mid - 1])
                return mid;
            if ((mid > 0 && mid < n) && (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]))
                return mid;
            if (nums[mid] < nums[mid + 1])
                left = mid + 1;
            else
                right = mid - 1;
        };
        return -1;
    }
};