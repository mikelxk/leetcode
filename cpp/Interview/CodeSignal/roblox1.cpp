#include "../std.hpp"
vector<int> solution(vector<int> diffs)
{
    int curr = 1500, max = 1500;
    for (auto &&n : diffs) {
        curr += n;
        max = std::max(max, curr);
    }
    return {max, curr};
}
