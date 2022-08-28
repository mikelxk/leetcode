#include "../std.hpp"
class Solution {
public:
    vector<int> productExceptSelf(vector<int> &nums)
    {
        int n = nums.size();
        vector<int> res(n, 1);
        int prefix = 1;
        for (int i = 0; i < n; ++i) {
            res[i] = prefix;
            prefix = prefix * nums[i];
        }
        int postfix = 1;
        for (int i = n - 1; i >= 0; --i) {
            res[i] = res[i] * postfix;
            postfix = postfix * nums[i];
        }
        return res;
    }
};
int main()
{
    Solution s;
    vector<int> v = {1, 2, 3, 4};
    auto r = s.productExceptSelf(v);
    cout << r[0];
}