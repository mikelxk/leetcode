#include "../std.hpp"
class Solution {
public:
    vector<int> topKFrequent(vector<int> &nums, int k)
    {
        int n = nums.size();
        unordered_map<int, int> m;
        for (auto &&n : nums) {
            m[n]++;
        }
        vector<vector<int>> buckets(n + 1);
        for (auto [k, v] : m) {
            buckets[v].push_back(k);
        }
        vector<int> res;
        for (int i = n; i >= 0; --i) {
            if (res.size() >= k) {
                break;
            }
            if (!buckets.empty()) {
                res.insert(res.end(), buckets[i].begin(), buckets[i].end());
            }
        }
        return res;
    }
};
int main()
{
    Solution s;
    vector<int> v = {1, 1, 1, 2, 2, 3};
    auto vi = s.topKFrequent(v, 2);
    cout << vi[0];
}