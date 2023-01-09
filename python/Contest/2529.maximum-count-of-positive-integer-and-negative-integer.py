from typing import List


class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        pos, neg = 0, 0
        for i in nums:
            if i > 0:
                pos += 1
            elif i < 0:
                neg += 1
        return max(pos, neg)
a = Solution()
b = a.maximumCount([-2,-1,-1,1,2,3])
print(b)
