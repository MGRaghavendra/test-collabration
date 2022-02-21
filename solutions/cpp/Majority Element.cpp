#include <vector>
#include <map>
using namespace std;
class Solution
{
public:
    int majorityElement(vector<int> &nums)
    {
        map<int, int> dict;
        int count = 0;
        int res = 0;
        for (int i = 0; i < nums.size(); i++)
        {
            if (dict.count(nums[i]))
            {
                dict[nums[i]] += 1;
            }
            else
            {
                dict[nums[i]] = 1;
            }
            if (count < dict[nums[i]])
            {
                count = dict[nums[i]];
                res = nums[i];
            }
        }
        return res;
    }
};