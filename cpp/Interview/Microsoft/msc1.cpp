#include "../std.hpp"
// Given a string S consisting of N lowercase English letters, return the length of longest substring in which every letter occurs an even number of times.
unordered_map<int, int> hm{{0, -1}};
int findTheLongestSubstring(string &S)
{
    int res = 0;
    int cur = 0;
    for (int i = 0; i < S.length(); ++i) {
        cur ^= 1 << S[i] - 'a' + 1;
        if (hm.find(cur) == hm.end()) {
            hm[cur] = i;
        }
        res = max(res, i - hm[cur]);
    }
    return res;
}
int main()
{
    string s = "bdaaadadab";
    cout << findTheLongestSubstring(s) << '\n';
}