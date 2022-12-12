#include "../std.hpp"
class Solution {
public:
    void sortColors(vector<int> &nums)
    {
        multiset<int> ms(nums.begin(), nums.end());
        nums = vector(ms.begin(), ms.end());
    }
};