#include <vector>
using namespace std;
class Solution
{
public:
    vector<int> sortArrayByParity(vector<int> &nums)
    {
        vector<int> res;
        for (int i = 0; i < nums.size(); i++)
        {
            if (nums[i] % 2 == 1)
            {
                res.push_back(nums[i]);
            }
            else
            {
                res.insert(res.begin(), nums[i]);
            }
        }
        return res;
    }
};