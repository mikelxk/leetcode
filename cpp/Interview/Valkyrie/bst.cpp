#include <iostream>
#include <vector>
using namespace std;
struct Node {
    int val;
    Node *left;
    Node *right;
    Node(int x = 0, Node *l = nullptr, Node *r = nullptr) : val(x), left(l), right(r) {}
};
Node *lowestCommonAncestor(Node *root, int p, int q)
{
    if (!root || root->val == p || root->val == q) {
        return root;
    }
    Node *left = lowestCommonAncestor(root->left, p, q);
    Node *right = lowestCommonAncestor(root->right, p, q);
    if (left && right) {
        return root;
    }
    return !left ? right : left;
}
int dist(Node *root, int target, int travel)
{
    if (!root) {
        return -1;
    }
    if (root->val == target) {
        return travel;
    }
    int leftDist = dist(root->left, target, travel + 1);
    int rightDist = dist(root->right, target, travel + 1);
    return leftDist != -1 ? leftDist : rightDist;
}
int findDistance(Node *root, int p, int q)
{
    Node *lca = lowestCommonAncestor(root, p, q);
    return dist(lca, p, 0) + dist(lca, q, 0);
}
Node *insert(Node *root, int val)
{
    if (!root) {
        return new Node(val);
    }
    if (val < root->val) {
        root->left = insert(root->left, val);
    }
    else {
        root->right = insert(root->right, val);
    }
    return root;
}
int BSTdistance(std::vector<int> values, int nodeA, int nodeB)
{
    Node *root = nullptr;
    for (int val : values) {
        root = insert(root, val);
    }
    return findDistance(root, nodeA, nodeB);
}
int main()
{
    cout << BSTdistance({8, 7, 13, 6, 2, 5, 1, 9, 11, 3, 4, 10}, 4, 2);
}