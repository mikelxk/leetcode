#include "../std.hpp"
class Solution {
public:
    bool isAnagram(string s, string t)
    {
        unordered_map<char, int> m;
        for (auto &&c : s) {
            m[c]++;
        }
        for (auto &&c : t) {
            if (m[c] == 0) {
                return false;
            }
            else {
                m[c]--;
            }
        }
        int c = 0;
        for (auto &&[k, v] : m) {
            if (v == 0) {
                ++c;
            }
        }
        return c == m.size();
    }
};

int main()
{
    Solution s;
    cout<<s.isAnagram("anagram", "nagaram");
}