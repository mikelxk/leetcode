#include "../../std.hpp"

int solution(string &S, vector<int> &C)
{
    // write your code in C++14 (g++ 6.2.0)
    int n = S.size();
    int res = 0;
    for (int i = 0; i < n - 1; ++i) {
        if (S[i] != S[i + 1]) {
            continue;
        }
        if (C[i] > C[i + 1]) {
            swap(C[i], C[i + 1]);
        }
        res += C[i];
    }
    return res;
}
int main()
{
    string s = "aabbcc";
    vector<int> c = {1, 2, 1, 2, 1, 2};
    cout << solution(s, c);
}