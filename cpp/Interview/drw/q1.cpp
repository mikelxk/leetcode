#include "../../std.hpp"

int solution(int A, int B)
{
    // write your code in C++14 (g++ 6.2.0)
    int boundA = sqrt(A);
    int boundB = sqrt(B) + 1;
    int res = 0;
    for (int i = boundA; i <= boundB; ++i) {
        int n = i * i + i;
        if (n >= A && n <= B) {
            ++res;
        }
    }
    return res;
}
int main()
{
    cout << solution(6, 20);
}