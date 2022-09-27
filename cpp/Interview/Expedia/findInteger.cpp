#include "../../std.hpp"
vector<int> getGreatestElements(vector<int> arr, int k)
{
    vector<int> res;
    int n = arr.size();
    priority_queue<int> pq;
    for (int i = 0; i < n; ++i) {
        pq.push(arr[i]);
        if (i >= k - 1) {
            vector<int> tmp;
            for (int i = 0; i < k; ++i) {
                tmp.push_back(pq.top());
                pq.pop();
            }
            res.push_back(tmp.back());
            for (auto &&i : tmp) {
                pq.push(i);
            }
        }
    }
    return res;
}
int main()
{
    auto v = getGreatestElements({4, 2, 1, 3}, 2);
    cout << v[0];
}