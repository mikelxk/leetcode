#include "../../std.hpp"
void dedup(vector<int> &vec)
{
    unordered_map<int, int> cnt;
    vec.erase(remove_if(vec.begin(), vec.end(), [&cnt](int &i) {
                  if (cnt[i] < 2) {
                      ++cnt[i];
                      return false;
                  }
                  else {
                      return true;
                  }
              }),
              vec.end());
}
int main()
{
    vector<int> v{0, 10, 10, 100, -1, -1, -1, 5, 5, 5, 8, 9, 10, 3, 9, 7, 0, 0, 0};
    dedup(v);
    cout << "?";
}