#include "../std.hpp"
class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>> &intervals, vector<int> &newInterval)
    {
        if (intervals.size() == 0) {
            return {newInterval};
        }
        auto compare = [](const vector<int> &intv1, const vector<int> &intv2) { return intv1[1] < intv2[0]; };
        auto [itr1, itr2] = equal_range(intervals.begin(), intervals.end(), newInterval, compare);
        if (itr1 == itr2) {
            intervals.insert(itr1, newInterval);
        }
        else {
            --itr2;
            auto &&v1 = *itr1;
            auto &&v2 = *itr2;
            v2 = {min(newInterval[0], v1[0]), max(newInterval[1], v2[1])};
            intervals.erase(itr1, itr2);
        }
        return intervals;
    }
};