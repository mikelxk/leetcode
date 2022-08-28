#include "../std.hpp"
struct TrieNode {
    TrieNode *children[26];
    bool isWord = false;
    TrieNode()
    {
        for (auto &&c : children) {
            c = nullptr;
        }
    }
};
class Trie {
public:
    TrieNode *root;
    Trie()
    {
        root = new TrieNode();
    }

    void insert(string word)
    {
        auto node = root;
        for (auto &&c : word) {
            int curr = c - 'a';
            if (!node->children[curr]) {
                node->children[curr] = new TrieNode();
            }
            node = node->children[curr];
        }
        node->isWord = true;
    }

    bool search(string word)
    {
        auto node = root;
        for (auto &&c : word) {
            int curr = c - 'a';
            if (!node->children[curr]) {
                return false;
            }
            node = node->children[curr];
        }
        return node->isWord;
    }

    bool startsWith(string prefix)
    {
        auto node = root;
        for (auto &&c : prefix) {
            int curr = c - 'a';
            if (!node->children[curr]) {
                return false;
            }
            node = node->children[curr];
        }
        return true;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */