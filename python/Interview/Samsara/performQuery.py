from collections import Counter
from typing import List


def performQuery(a: List[int], b: List[int], query: List[List[int]]):
    res = []
    ca = Counter(a)
    cb = Counter(b)
    for q in query:
        op = q[0]
        if op == 0:
            [i, x] = [q[1], q[2]]
            cb[b[i]] -= 1
            b[i] += x
            cb[b[i]] += 1
        elif op == 1:
            sum = q[1]
            cnt = 0
            for (k, v) in ca.items():
                compliment = sum - k
                if (cb[compliment] != 0):
                    cnt += v*cb[compliment]
            res.append(cnt)
    return res


re = performQuery([1, 2, 3],
                  [1, 4],
                  [
    [1, 5],
    [0, 0, 2],
    [1, 5],
])
print(re)
re1 = performQuery([1, 2, 2], [2, 3], [[1, 4], [0, 0, 1], [1, 5]])
print(re1)
