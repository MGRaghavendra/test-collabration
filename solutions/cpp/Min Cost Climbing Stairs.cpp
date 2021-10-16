#include <vector>
class Solution
{
public:
    int minCostClimbingStairs(std::vector<int> &cost)
    {
        for (int i = 2; i < cost.size(); i++)
            cost[i] += cost[i - 1] < cost[i - 2] ? cost[i - 1] : cost[i - 2];
        return (cost[cost.size() - 1] < cost[cost.size() - 2] ? cost[cost.size() - 1] : cost[cost.size() - 2]);
    }
};