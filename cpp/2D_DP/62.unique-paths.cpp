#include "../std.hpp"

class Solution {
public:
    int uniquePaths(int m, int n)
    {
        vector<vector<int>> grid(m, vector<int>(n, 0));
        for (auto &&r : grid) {
            r[0] = 1;
        }
        for (auto &&c : grid[0]) {
            c = 1;
        }
        for (int i = 1; i < m; ++i) {
            for (int j = 1; j < n; ++j) {
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            }
        }
        return grid[m - 1][n - 1];
    }
};
