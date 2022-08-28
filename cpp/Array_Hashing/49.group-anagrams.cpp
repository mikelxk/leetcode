#include "../std.hpp"
class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string> &strs)
    {
        unordered_map<string, vector<string>> m;
        for (auto &&s : strs) {
            auto key = getKey(s);
            m[key].push_back(s);
        }
        vector<vector<string>> res;
        for (auto [k, v] : m) {
            res.push_back(v);
        }
        return res;
    }
    string getKey(string str)
    {
        vector<int> cnt(26);
        for (size_t i = 0; i < str.size(); i++) {
            ++cnt[str[i] - 'a'];
        }
        string key;
        for (size_t i = 0; i < 26; i++) {
            key += (cnt[i] + 'a');
        }
        return key;
    }
};