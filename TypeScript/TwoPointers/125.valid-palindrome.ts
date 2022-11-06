function isPalindrome(s: string): boolean {
    s = s.toLowerCase().replace(/[\W_]/g, "")
    for (let i = 0; i < s.length; ++i) {
        const rev = s.length - 1 - i;
        if (s[i] != s[rev]) {
            return false
        }
    }
    return true
};