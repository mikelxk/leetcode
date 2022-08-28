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
    bool isBalanced(TreeNode *root)
    {
        int height = 0;
        return dfs(root, height);
    }
    bool dfs(TreeNode *root, int &height)
    {
        if (!root) {
            height = -1;
            return true;
        }
        int l = 0;
        int r = 0;
        bool balanced = dfs(root->left, l) && dfs(root->right, r) && (abs(l - r) <= 1);
        if (!balanced) {
            return false;
        }
        height = 1 + max(l, r);
        return true;
    }
};
int main(){

}