#include "../std.hpp"
typedef pair<int, int> pii;
class Solution {
public:
    int networkDelayTime(vector<vector<int>> &times, int n, int k)
    {
        vector<pii> adj[n];
        for (auto &&t : times) {
            int u = t[0] - 1;
            int v = t[1] - 1;
            int w = t[2];
            adj[u].push_back({v, w});
        }
        vector<int> dist(n, INT_MAX);
        vector<bool> processed(n, false);
        dist[k - 1] = 0;
        priority_queue<pii, vector<pii>, greater<pii>> pq;
        pq.push({0, k - 1});
        while (!pq.empty()) {
            int u = pq.top().second;
            pq.pop();
            if (processed[u]) {
                continue;
            }
            processed[u] = true;
            for (auto [v, w] : adj[u]) {
                if (dist[v] > dist[u] + w) {
                    dist[v] = dist[u] + w;
                    pq.push({dist[v], v});
                }
            }
        }
        int ans = *max_element(dist.begin(), dist.end());
        return ans == INT_MAX ? -1 : ans;
    }
};
int main()
{
    vector<vector<int>> t = {{2, 1, 1}, {2, 3, 1}, {3, 4, 1}};
    Solution s;
    cout << s.networkDelayTime(t, 4, 2);
}