#include "../std.hpp"

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode() : val(0), left(nullptr), right(nullptr) {}
    TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
    TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
};

class Solution {
public:
    int diameterOfBinaryTree(TreeNode *root)
    {
        int res = 0;
        dfs(root, res);
        return res;
    }
    int dfs(TreeNode *root, int res)
    {
        if (!root) {
            return 0;
        }
        int l = dfs(root->left, res);
        int r = dfs(root->right, res);
        res = max(res, l + r);
        return 1 + max(l, r);
    }
};