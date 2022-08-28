#include "../std.hpp"
class Solution {
public:
    int networkDelayTime(vector<vector<int>> &times, int n, int k)
    {
        vector<pair<int, int>> adj[n + 1];
        for (auto &&t : times) {
            int source = t[0];
            //{ time, dest }
            adj[source].push_back({t[2], t[1]});
        }
        vector<int> signalReceiveTime(n + 1, INT_MAX);
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        pq.push({0, k});
        signalReceiveTime[k] = 0;
        while (!pq.empty()) {
            auto [currNodeTime, currNode] = pq.top();
            pq.pop();
            if (currNodeTime > signalReceiveTime[currNode]) {
                continue;
            }
            for (auto &&[time, neighborNode] : adj[currNode]) {
                if (signalReceiveTime[neighborNode] > currNodeTime + time) {
                    signalReceiveTime[neighborNode] = currNodeTime + time;
                    pq.push({signalReceiveTime[neighborNode], neighborNode});
                }
            }
        }
        int res = *max_element(signalReceiveTime.begin() + 1, signalReceiveTime.end());
        if (res == INT_MAX) {
            return -1;
        }
        return res;
    }
};
int main()
{
}