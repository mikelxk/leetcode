#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX(x, y) ((x) > (y) ? (x) : (y))
#define MIN(x, y) ((x) < (y) ? (x) : (y))

int BIG_INT = 1000000;
/* est working time 1h
   Bellman-Ford Time:O(|V||E|)
*/
int main()
{
    int n = 0;
    scanf("%d", &n);
    int adj[n][n];
    int i = 0;
    int j = 0;
    int k = 0;
    for (i = 0; i < n; ++i) {
        for (j = 0; j < i; ++j) {
            char c[64];
            scanf("%s", c);
            if (c[0] != 'x') {
                int time = atoi(c);
                adj[i][j] = time;
                adj[j][i] = time;
            }
            else {
                adj[i][j] = BIG_INT;
                adj[j][i] = BIG_INT;
            }
        }
    }
    /* construct diagonal*/
    for (i = 0; i < n; ++i) {
        adj[i][i] = 0;
    }
    int dist[n];
    memset(dist, BIG_INT, n * (sizeof(int)));
    /* start at capital*/
    dist[0] = 0;
    /* bellman-ford */
    for (k = 1; k < n; ++k) {
        for (i = 0; i < n; ++i) {
            for (j = 0; j < n; ++j) {
                dist[j] = MIN(dist[j], dist[i] + adj[i][j]);
            }
        }
    }
    /* find max time */
    int res = 0;
    for (i = 0; i < n; ++i) {
        res = MAX(res, dist[i]);
    }
    printf("%d\n", res);
    return 0;
}