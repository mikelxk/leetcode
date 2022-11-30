#include "../../std.hpp"
int romanToInt(string s)
{
    unordered_map<char, int> m = {{'I', 1}, {'V', 5}, {'X', 10}, {'L', 50}, {'C', 100}, {'D', 500}, {'M', 1000}};
    int total = 0;
    for (int i = 0; i < s.length(); i++) {
        if (m[s[i + 1]] <= m[s[i]])
            total += m[s[i]];
        else
            total -= m[s[i]];
    }
    return total;
}
vector<string> sortRoman(vector<string> names)
{
    sort(names.begin(), names.end(), [](auto a, auto b) {
        int posA = a.find(" ");
        int posB = b.find(" ");
        string nameA = a.substr(0, posA);
        string nameB = b.substr(0, posB);
        if (nameA != nameB) {
            return nameA < nameB;
        }
        string romeA = a.substr(posA + 1);
        string romeB = b.substr(posB + 1);
        return romanToInt(romeA) < romanToInt(romeB);
    });
    return names;
}
int main()
{
    vector<string> vs{"Philippe VI", "Jean II", "Charles V", "Charles VI", "Charles VII", "Louis XI"};
    auto ret = sortRoman(vs);
    cout << ret[0];
}