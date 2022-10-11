#include "../../std.hpp"
class RandomizedSet {
    unordered_map<int, int> dict;
    vector<int> list;

public:
    bool insert(int val)
    {
        if (dict.find(val) != dict.end()) {
            return false;
        }
        dict[val] = list.size();
        list.push_back(val);
        return true;
    }
    bool remove(int val)
    {
        if (dict.find(val) == dict.end()) {
            return false;
        }
        int last = list.back();
        int idx = dict[val];
        dict[last] = idx;
        list[idx] = last;
        list.pop_back();
        dict.erase(val);
        return true;
    }
    int getRandom()
    {
        return list[rand() % list.size()];
    }
};