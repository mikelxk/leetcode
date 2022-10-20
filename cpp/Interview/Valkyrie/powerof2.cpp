#include "../../std.hpp"
bool powerOfTwo(int a)
{
    return a > 0 && has_single_bit((unsigned)a);
}