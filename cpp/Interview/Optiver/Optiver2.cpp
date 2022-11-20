#include <array>
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
bool withinRange(char c)
{
    return c >= 'A' && c <= 'Z';
}
int main()
{
    Tree t;
    string str;
    // e1->e5
    std::array<bool, 6> errors = {};
    getline(cin, str);

    for (int i = 0; i < str.size(); i += 6) {
        char open = str[i];
        char p = str[i + 1];
        char delim = str[i + 2];
        char c = str[i + 3];
        char close = str[i + 4];
        if (!(open == '(' && delim == ',' && close == ')' && withinRange(p) && withinRange(c))) {
            // E1 Invalid input Format
            errors[1] = true;
            break;
        }
        else {
            bool parentExist = t.exist(p);
            bool childExist = t.exist(c);
            if (parentExist && childExist) {
                if (t.findPair(p, c)) {
                    // E2  Duplicate pair
                    errors[2] = true;
                }
                else {
                    // E5 Input contain Cycle
                    errors[5] = true;
                }
                break;
            }
            if (t.root && !parentExist) {
                // E4 Multiple roots
                errors[4] = true;
                break;
            }
            if (!t.add(p, c) && parentExist) {
                // E3 Parent have more than one child
                errors[3] = true;
                break;
            }
        }
    }
    for (int i = 1; i < 6; ++i) {
        if (errors[i]) {
            cout << 'E' << i;
            return 0;
        }
    }
    t.S_expression();
    return 0;
}