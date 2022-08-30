#include "../std.hpp"
class Solution {
public:
    TreeNode *buildTree(vector<int> &preorder, vector<int> &inorder)
    {
        int rootIdx = 0;
        unordered_map<int, int> hmap;
        for (int i = 0; i < inorder.size(); ++i) {
            hmap[inorder[i]] = i;
        }
        return build(preorder, inorder, rootIdx, 0, inorder.size() - 1, hmap);
    }
    TreeNode *build(vector<int> &preorder, vector<int> &inorder, int &rootIdx, int l, int r, unordered_map<int, int> &hmap)
    {
        if (l > r) {
            return nullptr;
        }
        int pivot = hmap[preorder[rootIdx]];
        auto node = new TreeNode(inorder[pivot]);
        ++rootIdx;
        node->left = build(preorder, inorder, rootIdx, l, pivot - 1, hmap);
        node->right = build(preorder, inorder, rootIdx, pivot + 1, r, hmap);
        return node;
    }
};
int main()
{
    vector<int> v1 = {3, 9, 20, 15, 7}, v2 = {9, 3, 15, 20, 7};
    Solution s;
    auto v = s.buildTree(v1, v2);
    cout << v;
}
