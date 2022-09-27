#include "../../std.hpp"
int getMinimumHealth(vector<int> init, vector<int> newPlayer, int rank)
{
    priority_queue<int, vector<int>, greater<int>> pq;
    sort(init.begin(), init.end());
    for (int i = 0; i < rank; ++i) {
        pq.push(init[i]);
    }
    int minHealth = pq.top();
    for (auto &&p : newPlayer) {
        pq.pop();
        pq.push(p);
        minHealth += pq.top();
    }
    return minHealth;
}
int main()
{
    auto r = getMinimumHealth({1, 2}, {3, 4}, 2);
    cout << r << '\n';
}