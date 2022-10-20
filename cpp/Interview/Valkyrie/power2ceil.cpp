#include <bit>
#include<iostream>
using namespace std;
int powerOfTwoCeiling(int a)
{
    return bit_ceil((unsigned long)a);
}
int main()
{
    cout << powerOfTwoCeiling(3);
}