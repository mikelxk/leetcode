#include "../std.hpp"
class Solution {
public:
    int rob(vector<int> &nums)
    {
        int prev = 0, curr = 0, next = 0;
        for (auto &&n : nums) {
            next = max(prev + n, curr);
            prev = curr;
            curr = next;
        }
        return curr;
    }
};