from functools import cache
from typing import List


class SolutionMemo:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)

        @cache
        def minPath(row: int, col: int):
            path = triangle[row][col]
            if row < n - 1:
                path += min(minPath(row + 1, col), minPath(row + 1, col + 1))
            return path

        return minPath(0, 0)


class SolutionDP:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n = len(triangle)
        dp = [0] * (n + 1)
        for row in reversed(triangle):
            for i, n in enumerate(row):
                dp[i] = n + min(dp[i], dp[i + 1])
        return dp[0]
