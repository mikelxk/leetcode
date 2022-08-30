#include "../std.hpp"
class Solution {
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        vector<vector<int>> res;
        int n = nums.size();
        if (n < 3) {
            return res;
        }
        sort(nums.begin(), nums.end());
        for (int i = 0; i < n - 2; ++i) {
            if (nums[i] > 0) {
                break;
            }
            if(i>0&&nums[i-1]){
                
            }
        }
    }
};