#include "../../std.hpp"

int solution(vector<int> &A, vector<int> &B)
{
    // write your code in C++14 (g++ 6.2.0)
    int n = A.size();
    unordered_set<int> C;
    unordered_set<int> unused;
    for (int i = 0; i < n; ++i) {
        if (A[i] == B[i]) {
            C.insert(A[i]);
            continue;
        }
        C.insert(max(A[i], B[i]));
        unused.insert(min(A[i], B[i]));
    }
    int res = *max_element(C.begin(), C.end()) + 1;
    for (auto &&v : unused) {
        if (C.find(v) == C.end()) {
            res = min(res, v);
        }
    }
    return res;
}

int main()
{
    vector<int> a = {3, 2, 1, 6, 5};
    vector<int> b = {4, 2, 1, 3, 3};
    cout << solution(a, b);
}