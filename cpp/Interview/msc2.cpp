#include "../std.hpp"
// There are N points located on a line, numbered from 0 to N-1, whose coordinates are given in arrays A. For each i(0<=I<=N) the coordinate of point number I on the line is A[I].The coordinates of points do not have to be distinct.
int solution(vector<int> &A, int M)
{
    int res = 0;
    for (int i = 0; i < A.size(); ++i) {
        int subsetSize = 0;
        for (int j = 0; j < A.size(); ++j) {
            int diff = abs(A[i] - A[j]);
            if (diff % M == 0) {
                ++subsetSize;
            }
            if (subsetSize > res) {
                res = subsetSize;
            }
        }
    }
    return res;
}
int main()
{
    vector<int> A = {-3, -2, 1, 0, 8, 7, 1};
    cout << solution(A, 3);
}