#include "../../std.hpp"
vector<int> getGreatestElements(vector<int> arr, int k)
{
    vector<int> res;
    int n = arr.size();
    priority_queue<int, vector<int>, greater<int>> pq;
    for (int i = 0; i < k; ++i) {
        pq.push(arr[i]);
    }
    int topK = pq.top();
    res.push_back(topK);
    for (int i = k; i < n; ++i) {
        if (arr[i] > topK) {
            pq.pop();
            pq.push(arr[i]);
        }
        topK = pq.top();
        res.push_back(topK);
    }
    return res;
}
int main()
{
    auto v = getGreatestElements({4, 2, 1, 3}, 2);
    cout << v[0] << v[1] << v[2];
}