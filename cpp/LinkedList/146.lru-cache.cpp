#include "../std.hpp"
struct Node {
    int k;
    int val;
    Node *prev = nullptr;
    Node *next = nullptr;
    Node(int key, int value) : k(key), val(value) {}
};

class LRUCache {
public:
    LRUCache(int capacity) : cap(capacity)
    {
        ios::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);
        left->next = right;
        right->prev = left;
    }

    int get(int key)
    {
        if (cache.find(key) != cache.end()) {
            auto node = cache[key];
            remove(node);
            insert(node);
            return node->val;
        }
        return -1;
    }

    void put(int key, int value)
    {
        if (cache.find(key) != cache.end()) {
            remove(cache[key]);
        }
        cache[key] = new Node(key, value);
        insert(cache[key]);
        if (cache.size() > cap) {
            // remove from list & delete LRU from map
            Node *lru = left->next;
            remove(lru);
            cache.erase(lru->k);
            delete lru;
        }
    }

private:
    int cap;
    unordered_map<int, Node *> cache; // {key -> node}
    Node *left = new Node(0, 0);
    Node *right = new Node(0, 0);
    void remove(Node *node)
    {
        Node *prev = node->prev;
        Node *next = node->next;
        prev->next = next;
        next->prev = prev;
    }
    void insert(Node *node)
    {
        Node *prev = right->prev;
        Node *next = right;
        prev->next = node;
        next->prev = node;
        node->prev = prev;
        node->next = next;
    }
};