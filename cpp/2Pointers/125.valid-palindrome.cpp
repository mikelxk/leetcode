#include "../std.hpp"
class Solution {
public:
    bool isPalindrome(string s)
    {
        auto it = std::remove_if(s.begin(), s.end(), [](const char &c) {
            return !isalnum(c);
        });
        s.erase(it, s.end());
        transform(s.begin(), s.end(), s.begin(), ::tolower);
        for (int i = 0; i < s.size() / 2 + 1; ++i) {
            int rev = s.size() - 1 - i;
            if (i >= rev) {
                break;
            }
            if (s[i] != s[rev]) {
                return false;
            }
        }
        return true;
    }
};
int main()
{
    Solution s;
    cout << s.isPalindrome("A man, a plan, a canal: Panama");
}