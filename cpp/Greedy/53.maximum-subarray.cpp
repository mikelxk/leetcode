#include "../std.hpp"
class Solution {
public:
    int maxSubArray(vector<int> &nums)
    {
        if (nums.size() == 1) {
            return nums[0];
        }
        int curr = nums[0];
        int res = nums[0];
        for (int i = 1; i < nums.size(); ++i) {
            curr = max(curr + nums[i], nums[i]);
            res = max(res, curr);
        }
        return res;
    }
};
int main()
{
    Solution s;
    vector<int> v = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
    auto m = s.maxSubArray(v);
    cout << m;
}