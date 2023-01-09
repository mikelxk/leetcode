from functools import cache, lru_cache
from typing import List


class Solution:
    def canPartitionKSubsets(self, nums: List[int], k: int) -> bool:
        total_sum = sum(nums)
        n = len(nums)

        if total_sum % k:
            return False
        nums.sort(reverse=True)
        target = total_sum // k
        seen = [False] * n
        memo = {}

        def backtrack(count: int, curr_sum: int, pos: int):
            if count == k - 1:
                return True
            if curr_sum > target:
                return False
            seenStr = "".join([str(int(x)) for x in seen])
            if seenStr in memo:
                return memo[seenStr]
            if curr_sum == target:
                memo[seenStr] = backtrack(count + 1, 0, 0)
                return memo[seenStr]

            for i in range(pos, n):
                if not seen[i]:
                    seen[i] = True
                    if backtrack(count, curr_sum + nums[i], i + 1):
                        memo[seenStr] = True
                        return True
                    seen[i] = False
            return False

        return backtrack(0, 0, 0)


a = Solution()
print(a.canPartitionKSubsets([4, 5, 9, 3, 10, 2, 10, 7, 10, 8, 5, 9, 4, 6, 4, 9], 5))
