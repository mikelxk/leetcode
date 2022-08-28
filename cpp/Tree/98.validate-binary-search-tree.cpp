#include "../std.hpp"
//to do use bfs next time
class Solution {
public:
    bool isValidBST(TreeNode *root)
    {
        return isBstUtil(root, nullptr, nullptr);
    }
    bool isBstUtil(TreeNode *root, TreeNode *min, TreeNode *max)
    {
        if (!root) {
            return true;
        }
        if (min) {
            if (root->val <= min->val) {
                return false;
            }
        }
        if (max) {
            if (root->val >= max->val) {
                return false;
            }
        }
        return isBstUtil(root->left, min, root) && isBstUtil(root->right, root, max);
    }
};
int main()
{
    Solution s;
    auto l = new TreeNode(2);
    auto r = new TreeNode(2);
    auto root = new TreeNode(2,l,r);

    auto res = s.isValidBST(root);
    cout << res;
}