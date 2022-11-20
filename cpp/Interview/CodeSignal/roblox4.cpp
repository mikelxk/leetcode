#include "../std.hpp"
string solution(vector<vector<int>> operations)
{
    unordered_map<int, bool> obs;
    string ans;
    for (auto &&op : operations) {
        int s = op.size();
        if (op.size() == 2) {
            // build
            int co = op[1];
            obs[co] = true;
        }
        else {
            // check
            int co = op[1];
            int size = op[2];
            bool found = false;
            vector<int> t;
            auto [l1,h1]= obs.equal_range(co - 1);
            auto [l2,h2] = obs.equal_range(co - size);

            if (h1->first > co - size || l2->first < co) {
                found = true;
            }
            if (found) {
                ans += "0";
            }
            else {
                ans += "1";
            }
        }
    }
    return ans;
}
int main()
{
    vector<vector<int>> operations = {{1, 2}, {1, 5}, {2, 5, 2}, {2, 6, 3}, {2, 2, 1}, {2, 3, 2}};
    cout << solution(operations);
}
