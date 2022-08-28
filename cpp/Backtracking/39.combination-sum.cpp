#include "../std.hpp"
class Solution {
public:
    vector<int> curr;
    vector<vector<int>> res;
    vector<vector<int>> combinationSum(vector<int> &candidates, int target)
    {
        sort(candidates.begin(), candidates.end());
        dfs(candidates, target, 0, 0);
        return res;
    }
    void dfs(vector<int> &candidates, int target, int sum, int start)
    {
    }
};