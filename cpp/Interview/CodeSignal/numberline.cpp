#include "../../std.hpp"

string solution(vector<vector<int>> operations)
{
    set<int> s;
    string res;
    for (auto &&oper : operations) {
        int o = oper[0];
        int x = oper[1];
        if (o == 1) {
            s.insert(x);
        }
        else if (o == 2) {
            int size = oper[2];
            auto high = upper_bound(s.rbegin(), s.rend(), x + size, greater<int>());
            auto low = s.upper_bound(x);
            if ((high != s.rend() && *high > x) || (low != s.end() && *low < x + size)) {
                res += "0";
                continue;
            }
            res += "1";
        }
    }
    return res;
}

int main()
{
    cout << solution({{1, 2}, {1, 5}, {2, 3, 2}, {2, 3, 3}, {2, 1, 1}, {2, 1, 2}});
}