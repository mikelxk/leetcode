#include "../../std.hpp"
// In the popular game bingo, a player has a card represented by a matrix mat of size n x m that containes all of the number from range 1 to n xm. The player can call out any number from 1 to n xm and the number will be marked on the card if it exists. If the player has marked all the numbers in a row, column, or diagonal, the player wins.

// Given a matrix mat of size n x m and an array of numbers nums, return the number of times the player has won the game.
int getBingoNumber(vector<vector<int>> mat, vector<int> arr)
{
    size_t n = mat.size();
    size_t m = mat[0].size();
    vector<int> rowCnt(n, 0);
    vector<int> colCnt(m, 0);
    auto checkCol = [&](int col) {
        ++colCnt[col];
        return colCnt[col] == n;
    };

    auto checkRow = [&](int row) {
        ++rowCnt[row];
        return rowCnt[row] == m;
    };

    unordered_map<int, pair<int, int>> indexMapping;
    for (size_t i = 0; i < mat.size(); i++) {
        for (size_t j = 0; j < mat[i].size(); j++) {
            indexMapping[mat[i][j]] = {i, j};
        }
    }
    for (auto &&n : arr) {
        auto [row, col] = indexMapping[n];
        if (checkRow(row) || checkCol(col)) {
            return n;
        }
    }
    return -1;
}