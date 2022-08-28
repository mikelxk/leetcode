#include "../std.hpp"
class Solution {
public:
    unordered_map<Node *, Node *> m;
    Node *cloneGraph(Node *node)
    {
        if (!node) {
            return nullptr;
        }
        if (m.find(node) == m.end()) {
            m[node] = new Node(node->val);
            for (auto &&n : node->neighbors) {
                m[node]->neighbors.push_back(cloneGraph(n));
            }
        }
        return m[node];
    }
};