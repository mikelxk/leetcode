#include "../../std.hpp"
typedef int id;
typedef int score;
class Leaderboard {
    unordered_map<id, score> scores;

public:
    Leaderboard()
    {
    }

    void addScore(int playerId, int score)
    {
        if (scores.find(playerId) == scores.end()) {
            scores[playerId] = 0;
        }
        scores[playerId] += score;
    }
    int top(int K)
    {
        // we sort it in descending order and get the sum of [0:K]
        // we can get a min heap to maintain the K size
        priority_queue<score, vector<score>, greater<score>> pq;
        int res = 0;
        for (auto [player, sc] : scores) {
            if (pq.size() < K) {
                pq.push(sc);
                res += sc;
            }
            else {
                int lowesetScore = pq.top();
                if (sc > lowesetScore) {
                    res -= lowesetScore;
                    res += sc;
                    pq.push(sc);
                    pq.pop();
                }
            }
        }
        return res;
    }
    void reset(int playerId)
    {
        scores[playerId] = 0;
    }
};
int main()
{
    auto l = Leaderboard();
    l.addScore(1, 73);
    l.addScore(2, 56);
    l.addScore(3, 39);
    l.addScore(4, 59);
    l.addScore(5, 4);
    cout << l.top(1);
}