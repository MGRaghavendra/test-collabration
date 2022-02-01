#include <vector>
class Solution
{
public:
    void merge(std::vector<int> &nums1, int m, std::vector<int> &nums2, int n)
    {
        int arr[m + n], i = 0, j = 0, k = 0;
        while (i < m && j < n)
        {
            if (nums1[i] < nums2[j])
                arr[k++] = nums1[i++];

            else
                arr[k++] = nums2[j++];
        }
        while (i < m)
            arr[k++] = nums1[i++];

        while (j < n)
            arr[k++] = nums2[j++];

        for (i = 0; i < sizeof(arr) / sizeof(arr[0]); i++)
            nums1[i] = arr[i];
    }
};