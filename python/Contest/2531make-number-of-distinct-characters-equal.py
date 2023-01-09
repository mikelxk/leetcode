import collections


class Solution:
    def isItPossible(self, word1: str, word2: str) -> bool:
        s1 = collections.Counter(word1)
        s2 = collections.Counter(word2)
        newW1 = []
        newW2 = []
        for k, v in s1.items():
            if v >= 2:
                v = 2
            newW1.append(v * k)
        word1 = ''.join(newW1)
        for k, v in s2.items():
            if v >= 2:
                v = 2
            newW2.append(v * k)
        word2 = ''.join(newW2)
        n1 = len(word1)
        n2 = len(word2)
        for i in range(n1):
            for j in range(n2):
                w1 = word1[:i] + word2[j] + word1[i + 1 :]
                w2 = word2[:j] + word1[i] + word2[j + 1 :]
                if len(set(w1)) == len(set(w2)):
                    return True

        return False


a = Solution()

print(a.isItPossible("ac", "b"))
print(a.isItPossible("aab", "abcc"))
print(a.isItPossible("abcde", "fghij"))
print(a.isItPossible("ab", "abcc"))
print(a.isItPossible("a", "bb"))
