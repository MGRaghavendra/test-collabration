#include <vector>
class Solution
{
public:
    std::vector<int> makeRow(std::vector<int> row)
    {
        int i = 0, j = row.size();
        std::vector<int> res = {};
        while (i <= j)
        {
            if (i == 0)
                res.push_back(row[i]);
            else if (i <= j - 1)
                res.push_back(row[i - 1] + row[i]);
            else
                res.push_back(row[j - 1]);
            i = i + 1;
        }
        return res;
    }
    std::vector<int> getRow(int rowIndex)
    {
        std::vector<std::vector<int>> triangle = {{1}};
        while (triangle.size() <= rowIndex)
            triangle.push_back(makeRow(triangle[triangle.size() - 1]));
        return triangle[rowIndex];
    }
};