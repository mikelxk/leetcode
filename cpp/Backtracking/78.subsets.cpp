#include "./std.hpp"
class Solution {
public:
    vector<vector<int>> res;
    vector<vector<int>> subsets(vector<int> &nums)
    {
        vector<int> c = {};
        dfs(nums, 0, c);
        
        return res;
    }
    void dfs(vector<int> &nums, int start, vector<int> &curr)
    {
        res.push_back(curr);
        for (int i = start; i < nums.size();++i){
            curr.push_back(nums[i]);
            dfs(nums, i + 1, curr);
            curr.pop_back();
        }
    }
};