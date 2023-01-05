from typing import List


class Solution:
    def minDeletionSize(self, strs: List[str]) -> int:
        k = len(strs[0])
        res = 0
        for c in range(k):
            for r in range(len(strs) - 1):
                if strs[r][c] > strs[r + 1][c]:
                    res += 1
                    break
        return res
