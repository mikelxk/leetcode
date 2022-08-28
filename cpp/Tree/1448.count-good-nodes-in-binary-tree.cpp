#include "../std.hpp"
class Solution {
public:
    int goodNodes(TreeNode *root)
    {
        int res = 0;
        dfs(root, root->val, res);
        return res;
    }
    void dfs(TreeNode *root, int max, int &res)
    {
        if (!root) {
            return;
        }
        if (root->val >= max) {
            ++res;
        }
        max = std::max(max, root->val);
        dfs(root->left, max, res);
        dfs(root->right, max, res);
    }
};