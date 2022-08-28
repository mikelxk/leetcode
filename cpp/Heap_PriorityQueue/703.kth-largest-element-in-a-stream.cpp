#include "../std.hpp"
class KthLargest {
public:
    priority_queue<int, vector<int>, greater<int>> pq;
    int k;
    KthLargest(int k, vector<int> &nums) : k(k)
    {
        for (auto &&n : nums) {
            pq.push(n);
        }
        while (pq.size() > this->k) {
            pq.pop();
        }
    }

    int add(int val)
    {
        pq.push(val);
        if (pq.size() > k) {
            pq.pop();
        }
        return pq.top();
    }
};
