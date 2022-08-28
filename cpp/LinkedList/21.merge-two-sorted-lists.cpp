#include "../std.hpp"
class Solution {
public:
    ListNode *mergeTwoLists(ListNode *list1, ListNode *list2)
    {
        if (!list1 && !list2) {
            return nullptr;
        }
        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }
        if (list1->val <= list2->val) {
            list1->next = mergeTwoLists(list1->next, list2);
        }
        else {
            list2->next = mergeTwoLists(list2->next, list2);
        }
    }
};