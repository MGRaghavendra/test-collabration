class Solution
{
public:
    int getMaximumGenerated(int n)
    {
        if (n == 0)
            return 0;
        if (n == 1 || n == 2)
            return 1;
        int arr[n + 1];
        int i = 2, max = 0, len;
        arr[0] = 0;
        arr[1] = 1;
        len = sizeof(arr) / sizeof(arr[0]);
        while (i < len)
        {
            if (i % 2 == 0)
                arr[i] = arr[i / 2];
            else
                arr[i] = arr[i / 2] + arr[i / 2 + 1];
            if (arr[i] > max)
                max = arr[i];
            i = i + 1;
        }
        return max;
    }
};