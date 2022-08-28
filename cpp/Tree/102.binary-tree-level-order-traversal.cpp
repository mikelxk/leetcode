#include "../std.hpp";
class Solution {
public:
    vector<vector<int>> ret;
    vector<vector<int>> levelOrder(TreeNode *root)
    {
        buildVec(root, 0);
        return ret;
    }
    void buildVec(TreeNode *root, int depth)
    {
        if (!root) {
            return;
        }
        if (ret.size() == depth) {
            ret.resize(depth + 1);
        }
        ret[depth].push_back(root->val);
        buildVec(root->left, depth + 1);
        buildVec(root->right, depth + 1);
    }
};