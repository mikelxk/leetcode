#include "../std.hpp"
int solution(vector<int> &A, vector<int> &B)
{
    int minVal = 0;
    int maxVal = 0;
    for (int i = 0; i < A.size(); i++) {
        if (A[i] != B[i]) {
            minVal = max(min(A[i], B[i]), minVal);
        }
        else {
            maxVal = max(maxVal, max(A[i], B[i]) + 1);
        }
    }
    if (minVal == 0) {
        return maxVal;
    }
    return minVal;
}
void t1()
{
    vector<int> A = {1, 2, 4, 3};
    vector<int> B = {1, 3, 2, 3};
    cout << solution(A, B);
}
void t2()
{
    vector<int> A = {3, 2, 1, 6, 5};
    vector<int> B = {4, 2, 1, 3, 3};
    cout << solution(A, B);
}
void t3(){
    vector<int> A = {1, 2, 3, 4, 5};
    vector<int> B = {1, 2, 3, 4, 5};
    cout << solution(A, B);
}
int main()
{
    t3();
}