#include "../../std.hpp"

/*
 * Complete the 'getMinimumHealth' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY initial_players
 *  2. INTEGER_ARRAY new_players
 *  3. INTEGER rank
 */
long getMinimumHealth(vector<int> initial_players, vector<int> new_players, int rank)
{
    priority_queue<int, vector<int>, greater<int>> pq;
    sort(initial_players.begin(), initial_players.end(), greater<int>());
    for (int i = 0; i < rank; ++i) {
        pq.push(initial_players[i]);
    }
    long minHealth = pq.top();
    for (auto &&p : new_players) {
        if (p >= pq.top()) {
            pq.pop();
            pq.push(p);
        }
        minHealth += pq.top();
    }
    return minHealth;
}
int main()
{
    auto r = getMinimumHealth({1, 2}, {3, 4}, 2);
    cout << r << '\n';
}