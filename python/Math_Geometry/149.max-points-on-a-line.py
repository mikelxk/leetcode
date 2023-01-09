import collections
import math
from typing import List


class Solution:
    def maxPoints(self, points: List[List[int]]) -> int:
        n = len(points)
        if n < 2:
            return n
        res = 0
        for i in range(n):
            map = collections.defaultdict(int)
            duplicate = 0
            curMax = 0
            for j in range(i, n):
                if points[i] == points[j]:
                    duplicate += 1
                    continue
                xi, yi = points[i]
                xj, yj = points[j]

                slope = (xj - xi) / (yi - yj) if yj != yi else float("inf")
                map[slope] += 1
                curMax = max(curMax, map[slope])
            res = max(res, curMax + duplicate)
        return res

a = Solution()
print(a.maxPoints([[1,1],[2,2],[3,3]]))