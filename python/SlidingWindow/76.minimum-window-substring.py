from collections import Counter


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if t == "":
            return ""

        countT = Counter(t)
        window = {}
        have, need = 0, len(countT)
        res, resLen = [-1, -1], float("inf")
        l = 0
        for r in range(len(s)):
            c = s[r]
            window[c] = 1 + window.get(c, 0)

            if c in countT and window[c] == countT[c]:
                have += 1

            while have == need:
                if (r - l + 1) < resLen:
                    res = [l, r]
                    resLen = r - l + 1

                window[s[l]] -= 1
                if s[l] in countT and window[s[l]] < countT[s[l]]:
                    have -= 1
                l += 1
        l, r = res
        return s[l:r+1] if resLen != float("inf") else ""


s = Solution()
r = s.minWindow("ADOBECODEBANC", "ABC")
print(r)
