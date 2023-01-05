from typing import List


class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        total = sum(nums)
        if total % 2:
            return False
        target = total // 2
        dp = set([0])

        for n in nums:
            tmp = set(dp)
            for i in tmp:
                dp.add(i + n)
                dp.add(i)
        return target in dp
