#include <string>
class Solution
{
public:
    int getCount(char jewel, std::string stones)
    {
        int i = 0, j = stones.length() - 1, count = 0;
        while (i <= j)
        {
            if (i == j)
            {
                if (stones[i] == jewel)
                    count = count + 1;
            }
            else
            {
                if (jewel == stones[i])
                    count = count + 1;
                if (jewel == stones[j])
                    count = count + 1;
            }
            i = i + 1;
            j = j - 1;
        }
        return count;
    }
    int numJewelsInStones(std::string jewels, std::string stones)
    {
        int i = 0, j = jewels.length() - 1, count = 0;
        while (i <= j)
        {
            if (i == j)
                count = count + getCount(jewels[i], stones);
            else
            {
                count = count + getCount(jewels[i], stones);
                count = count + getCount(jewels[j], stones);
            }
            i = i + 1;
            j = j - 1;
        }
        return count;
    }
};