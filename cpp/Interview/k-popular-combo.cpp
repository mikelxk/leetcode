#include "../std.hpp"
typedef pair<int, int> pi;
vector<long> kMostPopularCombo(vector<int> &popularity, int k)
{
    long maxPopularity = 0;
    for (auto &&p : popularity) {
        if (p > 0)
            maxPopularity += p;
        else
            p = abs(p);
    }
    sort(popularity.begin(), popularity.end());
    priority_queue<pi, vector<pi>, greater<pi>> pq;
    int n = popularity.size();
    pq.push({popularity[0], 0});
    vector<long> subArraySum;
    while (!pq.empty() && subArraySum.size() < k - 1) {
        auto [currMinSum, currEndIdx] = pq.top();
        pq.pop();
        subArraySum.push_back(currMinSum);
        int nextIdx = currEndIdx + 1;
        if (nextIdx < n) {
            // next subarray including current element
            pq.push({currMinSum + popularity[nextIdx], nextIdx});
            // next subarray without current element
            pq.push({currMinSum - popularity[currEndIdx] + popularity[nextIdx], nextIdx});
        }
    }
    vector<long> result;
    result.push_back(maxPopularity);
    for (auto i : subArraySum) {
        result.push_back(maxPopularity - i);
    }
    return result;
}
int main()
{
    vector<int> v{3, 5, -2};
    auto r = kMostPopularCombo(v, 3);
    for (auto &&i : r) {
        cout << i << " ";
    }
}