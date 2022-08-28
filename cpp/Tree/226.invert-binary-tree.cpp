#include "../std.hpp"

class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(!root){
            return root;
        }
        auto x = root->left;
        root->left = root->right;
        root->right = x;
        invertTree(root->left);
        invertTree(root->right);
        return root;
    }
};
// int r,l;
// x ,r,l    x=l , l=r,r=x