#include "../std.hpp"

class Interval {
public:
    int start, end;
    Interval(int start, int end)
    {
        this->start = start;
        this->end = end;
    }
};

class Solution {
public:
    /**
     * @param intervals: an array of meeting time intervals
     * @return: if a person could attend all meetings
     */
    bool canAttendMeetings(vector<Interval> &intervals)
    {
        if (intervals.empty()) {
            return true;
        }
        sort(intervals.begin(), intervals.end());
        for (int i = 1; i < intervals.size(); ++i) {
            auto &&before = intervals[i - 1];
            auto &&curr = intervals[i];
            if (before.end > curr.start) {
                return false;
            }
        }
        return true;
    }
};