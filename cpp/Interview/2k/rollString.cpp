#include "../../std.hpp"
string rollTheString(string s, vector<int> roll)
{
    int n = s.size();
    sort(roll.begin(), roll.end());
    vector<int> rowCnt(n, 0);
    for (auto &&r : roll) {
        ++rowCnt[r - 1];
    }
    auto rowChar = [](char c, int cnt) {
        return 'a' + (c - 'a' + cnt) % 26;
    };
    int accum = 0;
    for (int i = s.size() - 1; i >= 0; --i) {
        int roll = rowCnt[i] + accum;
        if (rowCnt[i]) {
            accum = roll;
        }
        s[i] = rowChar(s[i], roll);
    }
    return s;
}
int main()
{
    string a = "abz";
    vector<int> v = {3};
    cout << rollTheString(a, v);
}