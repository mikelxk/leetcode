#include "../../std.hpp"
int maxTransaction(vector<int> transactions)
{
    priority_queue<int, vector<int>, greater<int>> pq;
    int sum = 0;
    int num = 0;
    for (auto &&e : transactions) {
        if (e > 0) {
            sum += e;
            ++num;
        }
        else {
            if (sum + e < 0) {
                if (pq.empty()) {
                    continue;
                }
                int temp = pq.top();
                if (temp + sum > 0) {
                    pq.pop();
                    pq.push(e);
                    sum -= temp;
                    sum += e;
                    ++num;
                }
            }
            else {
                sum += e;
                ++sum;
                pq.push(e);
                ++num;
            }
        }
    }
    return num;
}
int main()
{
    auto r = maxTransaction({1, 2, 2, -6, -5, -4, -3, -2, -1, 4});
    cout << r << '\n';
}