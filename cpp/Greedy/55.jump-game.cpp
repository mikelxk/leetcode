#include "../std.hpp"
class Solution {
public:
    bool canJump(vector<int> &nums)
    {
        for (int i = 0, reachable = 1; i < nums.size() && reachable > 0; ++i) {
            if (reachable >= nums.size() - i) {
                return true;
            }
            reachable = max(reachable - 1, nums[i]);
        }
        return false;
    }
};