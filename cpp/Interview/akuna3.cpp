#include "../std.hpp"

int findMaxVisitScore(vector<int> &siteScore, vector<vector<int>> &trainRoute)
{
    int N = siteScore.size();
    vector<pair<int, int>> adj[N];
    for (auto &&route : trainRoute) {
        auto start = route[0];
        auto dest = route[1];
        adj[start].push_back({dest, siteScore[dest]});
    }
    int maxScore = -1;
    bool visited[N] = {0};
    for (int i = 0; i < N; ++i) {
        function<void(int, int, int &)> dfs = [&visited, &adj, &dfs, &maxScore, &siteScore, &N](int s, int depth, int &sum) {
            visited[s] = true;
            // currScore += siteScore[s];
            ++depth;
            sum += siteScore[s];
            if (depth == 4) {
                return;
            }
            for (auto &&[dest, score] : adj[s]) {
                if (!visited[dest]) {
                    dfs(dest, depth, sum);
                }
            }
        };

        int sum = 0;
        dfs(i, 0, sum);
        maxScore = max(maxScore, sum);

        fill(visited, visited + N, false);
    }
    return maxScore;
}

int main()
{
    vector<int> score = {90, 95, 80, 85, 70};
    vector<vector<int>> trainRoute = {{0, 4},
                                      {1, 2},
                                      {2, 3},
                                      {1, 0},
                                      {0, 2},
                                      {4, 3}};
    auto r = findMaxVisitScore(score, trainRoute);
    cout << r;
}