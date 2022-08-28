#include "../std.hpp"
class Solution {
public:
    vector<vector<int>> vec;
    vector<int> rightSideView(TreeNode *root)
    {
        buildVec(root, 0);
        vector<int> ret;
        for (auto &&v : vec) {
            ret.push_back(v.back());
        }
        return ret;
    }
    void buildVec(TreeNode *root, int depth)
    {
        if (!root) {
            return;
        }
        if (depth == vec.size()) {
            vec.push_back({});
        }
        vec[depth].push_back(root->val);
        buildVec(root->left, depth + 1);
        buildVec(root->right, depth + 1);
    }
};