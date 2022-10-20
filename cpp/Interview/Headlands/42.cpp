#include <iostream>

constexpr auto middle(uint low, uint high)
{
    return low + (high - low) / 2 + 1;
}
constexpr auto sqrtHelper(uint x, uint low, uint high)
{
    if (low == high) {
        return low;
    }
    auto mid = middle(low, high);
    if (x / mid < mid) {
        return sqrtHelper(x, low, mid - 1);
    }
    else {
        return sqrtHelper(x, mid, high);
    }
}
constexpr auto sqrt(uint x)
{
    return sqrtHelper(x, 0, x / 2 + 1);
}

auto main() -> int
{
    std::cout << sqrt(42) << '\n';
}