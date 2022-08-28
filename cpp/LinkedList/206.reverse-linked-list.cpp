#include "../std.hpp"
struct ListNode {
    int val;
    ListNode *next;
    ListNode() : val(0), next(nullptr) {}
    ListNode(int x) : val(x), next(nullptr) {}
    ListNode(int x, ListNode *next) : val(x), next(next) {}
};
class Solution {
public:
    ListNode *reverseList(ListNode *head)
    {
        if (!head || !head->next) {
            return head;
        }
        ListNode *prev = nullptr;
        auto curr = head;
        while (curr) {
            auto next = curr->next;
            curr->next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
};
int main(){
    auto a2 = new ListNode(2);
    auto a1 = new ListNode(1, a2);
    Solution s;
    auto r = s.reverseList(a1);
    cout << r->val;
}