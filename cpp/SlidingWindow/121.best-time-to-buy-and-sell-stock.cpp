#include "../std.hpp"
class Solution {
public:
    int maxProfit(vector<int> &prices)
    {
        int minVal = prices[0];
        int maxDiff = 0;
        for (auto &&p : prices) {
            minVal = min(minVal, p);
            maxDiff = max(maxDiff, p - minVal);
        }
        return maxDiff;
    }
};