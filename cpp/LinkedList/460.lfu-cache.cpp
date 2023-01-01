#include "../std.hpp"
struct cacheNode {
    int key;
    int val;
    int freq;
    long tick;
    bool operator<(const cacheNode &rhs) const
    {
        if (freq < rhs.freq)
            return true;
        if (freq == rhs.freq)
            return tick < rhs.tick;
        return false;
    }
};
class LFUCache {
    long time = 0;
    long cap;
    unordered_map<int, cacheNode> cm;
    set<cacheNode> cache;

public:
    LFUCache(int capacity) : cap(capacity) {}
    int get(int key)
    {
        auto it = cm.find(key);
        if (it == cm.end())
            return -1;
        int value = it->second.val;
        touch(it->second);
        return value;
    }
    void put(int key, int value)
    {
        if (cap == 0) {
            return;
        }
        auto it = cm.find(key);
        if (it != cm.end()) {
            it->second.val = value;
            touch(it->second);
            return;
        }
        if (cm.size() == cap) {
            auto &node = *cache.begin();
            cm.erase(node.key);
            cache.erase(node);
        }
        cacheNode node{key, value, 1, ++time};
        cm[node.key] = node;
        cache.insert(node);
    }
    void touch(cacheNode &node)
    {
        cache.erase(node);
        ++node.freq;
        node.tick = ++time;
        cache.insert(node);
    }
};