#include "../std.hpp"
class Solution {
public:
    int lastStoneWeight(vector<int> &stones)
    {
        priority_queue<int> pq(stones.begin(), stones.end());
        while (pq.size() > 1) {
            int x = pq.top();
            pq.pop();
            int y = pq.top();
            pq.pop();
            if (x == y) {
                continue;
            }
            pq.push(x - y);
        }
        return pq.empty() ? 0 : pq.top();
        // pq.push(0);
        // return pq.top();
    }
};
int main()
{
    Solution s;
    vector<int> v = {2, 7, 4, 1, 8, 1};
    int a = s.lastStoneWeight(v);
    cout << a;
}