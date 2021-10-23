#include <vector>
class Solution
{
public:
    int getMinimumPath(std::vector<int> row)
    {
        int min = row[0], size = row.size();
        for (int i = 0; i < size; i++)
        {
            if (min > row[i])
                min = row[i];
        }
        return min;
    }
    int minimum(int a, int b, int c = 0)
    {
        if (c != 0)
        {
            if (a < b && a < c)
                return a;
            if (b < c)
                return b;
            else
                return c;
        }
        else
            return a < b ? a : b;
    }
    int minFallingPathSum(std::vector<std::vector<int>> &matrix)
    {
        int colSize = matrix[0].size(), rowSize = matrix.size();
        for (int i = 1; i < rowSize; i++)
        {
            for (int j = 0; j < colSize; j++)
            {
                if (j == 0)
                    matrix[i][j] = matrix[i][j] + minimum(matrix[i - 1][j], matrix[i - 1][j + 1]);
                else if (j < colSize - 1)
                    matrix[i][j] = matrix[i][j] + minimum(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i - 1][j + 1]);
                else
                    matrix[i][j] = matrix[i][j] + minimum(matrix[i - 1][j], matrix[i - 1][j - 1]);
            }
        }
        return getMinimumPath(matrix[rowSize - 1]);
    }
};