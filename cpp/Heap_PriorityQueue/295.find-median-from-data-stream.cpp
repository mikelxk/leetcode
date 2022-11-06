#include "../std.hpp"
class MedianFinder {
    priority_queue<int> lower;
    priority_queue<int, vector<int>, greater<int>> upper;

public:
    MedianFinder()
    {
    }
    void addNum(int num)
    {
        lower.push(num);
        if (lower.size() > upper.size() + 1 || !upper.size() == 0 && lower.top() > upper.top()) {
            upper.push(lower.top());
            lower.pop();
        }
        if (upper.size() > lower.size() + 1) {
            lower.push(upper.top());
            upper.pop();
        }
    }

    double findMedian()
    {
        int maxSize = lower.size();
        int minSize = upper.size();
        if (maxSize == minSize) {
            return (double)(upper.top() + lower.top()) / 2;
        }
        else if (maxSize > minSize) {
            return (double)lower.top();
        }
        else {
            return (double)upper.top();
        }
    }
};
int main()
{
    MedianFinder *obj = new MedianFinder();
    obj->addNum(1);
    obj->addNum(2);
    double param_2 = obj->findMedian();
}
