#include "../../std.hpp"
// Imagine you are playing a gravity-based puzzle game that involves clearing obstacles to allow an irregularly-shaped figure to fall to the bottom.
// input : A rectangular matrix representing the board consisting of the characters '.', '*', and '#'. It's guaranteed that one of the cells of the board will be '*'
int solution(vector<vector<char>> board)
{
    int row = board.size();
    int col = board[0].size();
    int maxHeight = 0;
    for (int i = 0; i < row; i++) {
        for (int j = 0; j < col; j++) {
            if (board[i][j] == '*') {
                int height = 0;
                for (int k = i; k < row; k++) {
                    if (board[k][j] == '.') {
                        height++;
                    }
                    else {
                        break;
                    }
                }
                maxHeight = std::max(maxHeight, height);
            }
        }
    }
    return maxHeight;
}

int main()
{
    vector<vector<char>> v = {{'#', '#', '#'}, {'#', '#', '#'}, {'#', '#', '.'}, {'.', '.', '.'}, {'.', '#', '#'}};
    cout << solution(v);
}
