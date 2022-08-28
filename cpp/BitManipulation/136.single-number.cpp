#include "../std.hpp"
class Solution {
public:
    int singleNumber(vector<int> &nums)
    {
        int res = 0;
        for (auto &&n : nums) {
            res = res ^ n;
        }
        return res;
    }
};