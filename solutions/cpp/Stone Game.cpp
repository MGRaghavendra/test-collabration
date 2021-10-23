#include <vector>
#include <bits/stdc++.h>
class Solution
{
public:
    bool stoneGame(std::vector<int> &piles)
    {
        std::sort(piles.begin(), piles.end(), std::greater<int>());
        int i = 0, ac = 0, bc = 0;
        while (i < piles.size())
        {
            ac = ac + piles[i];
            bc = bc + piles[i + 1];
            i = i + 2;
        }
        return ac > bc;
    }
};