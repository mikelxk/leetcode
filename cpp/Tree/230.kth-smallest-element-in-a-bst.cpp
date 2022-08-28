#include "../std.hpp"
class Solution {
public:
    int kthSmallest(TreeNode *root, int k)
    {
        int result = 0;
        inOrder(root, k, result);
        return result;
    }
    void inOrder(TreeNode *root, int &k, int &result)
    {
        if (!root) {
            return;
        }
        inOrder(root->left, k, result);
        --k;
        if (k == 0) {
            result = root->val;
            return;
        }
        inOrder(root->right, k, result);
    }
};