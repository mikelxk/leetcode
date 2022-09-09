#include <iostream>
using namespace std;
struct Node {
    char val;
    Node *left = nullptr;
    Node *right = nullptr;
    Node(char val) : val(val){};
};

struct Tree {
    Node *root = nullptr;
    bool exist(char c)
    {
        return existHelper(root, c);
    }
    bool existHelper(Node *r, char c)
    {
        if (!r) {
            return false;
        }
        if (r->val == c) {
            return true;
        }
        return existHelper(r->left, c) || existHelper(r->right, c);
    }
    bool add(char par, char child)
    {
        if (!root) {
            root = new Node(par);
            if (!root->left) {
                root->left = new Node(child);
            }
            else {
                root->right = new Node(child);
            }
            return true;
        }
        else {
            return addHelper(root, par, child);
        }
    }
    bool addHelper(Node *n, char par, char child)
    {
        if (!n) {
            return false;
        }
        else {
            if (n->val == par) {
                if (!n->left) {
                    n->left = new Node(child);
                    return true;
                }
                else if (!n->right) {
                    n->right = new Node(child);
                    return true;
                }
                return false;
            }
            else {
                return (addHelper(n->left, par, child) || addHelper(n->right, par, child));
            }
        }
    }
    bool findPair(char par, char child)
    {
        return findPairHelper(root, par, child);
    }
    bool findPairHelper(Node *n, char par, char child)
    {
        if (!n) {
            return false;
        }
        else {
            if (n->val == par) {
                if ((n->left && n->left->val == child) || (n->right && n->right->val == child)) {
                    return true;
                }
                return false;
            }
            else {
                return findPairHelper(n->left, par, child) || findPairHelper(n->right, par, child);
            }
        }
    }
    void S_expression()
    {
        S_expressionHelper(root);
    }
    void S_expressionHelper(Node *n)
    {
        if (!n) {
            return;
        }
        // preorder here
        cout << "(" << n->val;
        S_expressionHelper(n->left);
        S_expressionHelper(n->right);
        cout << ")";
    }
};

int main()
{
    Tree t;
    string str;
    bool error = false;

    getline(cin, str);

    for (int i = 0; i < str.size(); i += 6) {
        if (!(str[i] == '(' && str[i + 2] == ',' && str[i + 4] == ')')) {
            // E1 Invalid input Format
            cout << "E1";
            error = true;
            break;
        }
        else {
            char p = str[i + 1];
            char c = str[i + 3];
            bool parentExist = t.exist(p);
            bool childExist = t.exist(c);
            if (parentExist && childExist) {
                if (t.findPair(p, c)) {
                    // E2  Duplicate pair
                    cout << "E2";
                }
                else {
                    // E5 Input contain Cycle
                    cout << "E5";
                }
                error = true;
                break;
            }
            else {
                if (t.root && !parentExist) {
                    // E4 Multiple root
                    cout << "E4";
                    error = true;
                    break;
                }
                else {
                    if (!t.add(p, c)) {
                        // E3 Parent have more than one child
                        cout << "E3";
                        error = true;
                        break;
                    }
                }
            }
        }
    }

    if (!error) {
        t.S_expression();
    }

    return 0;
}