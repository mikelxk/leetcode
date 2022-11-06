#include "../std.hpp"
class Solution {
public:
    double maxProbability(int n, vector<vector<int>> &edges, vector<double> &succProb, int start, int end)
    {
        vector<pair<int, double>> adj[n];
        for (int i = 0; i < edges.size(); i++) {
            int src = edges[i][0];
            int dest = edges[i][1];
            adj[src].push_back({dest, succProb[i]});
            adj[dest].push_back({src, succProb[i]});
        }
        priority_queue<pair<double, int>> pq;
        vector<double> dist(n, 0);
        pq.push({1, start});
        dist[start] = 1;
        while (!pq.empty()) {
            int u = pq.top().second;
            pq.pop();
            for (auto [v, prob] : adj[u]) {
                if (dist[v] < dist[u] * prob) {
                    dist[v] = dist[u] * prob;
                    pq.push({dist[v], v});
                }
            }
        }
        return dist[end];
    }
};
int main()
{
    Solution s;
    vector<vector<int>> edge = {{0, 1}, {1, 2}, {0, 2}};
    vector<double> succProb = {0.5, 0.5, 0.2};
    s.maxProbability(3, edge, succProb, 0, 2);
}