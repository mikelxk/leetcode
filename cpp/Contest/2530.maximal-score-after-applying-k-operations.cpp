#include "../std.hpp"
class Solution {
public:
    long long maxKelements(vector<int> &nums, int k)
    {
        priority_queue<int> pq;
        for (auto &&n : nums) {
            pq.push(n);
        }
        long long res = 0;
        for (int i = 0; i < k; ++i) {
            int tmp = pq.top();
            res += tmp;
            pq.pop();
            pq.push(ceil(tmp / 3.0));
        }
        return res;
    }
};
int main()
{
    Solution s;
    vector<int> v{10, 10, 10, 10, 10};
    cout << s.maxKelements(v, 5);
}