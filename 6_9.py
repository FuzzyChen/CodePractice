# 438. Find All Anagrams in a String
# Sliding Window. The size of window is fixed so just loop once.
class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        res = []
        l = len(p)
        p1 = list(p)
        p1.sort()
        for i in range(len(s)-l+1):
            temp = list(s[i:i+l])
            temp.sort()
            if temp == p1:
                res.append(i)
        return res


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        freqS, freqP = [0 for _ in range(26)], [0 for _ in range(26)]
        res = []
        # set the basic list to compare
        for ch in p:
            freqP[ord(ch)-97] += 1
        for i in range(len(s)):
            if i >= len(p):
                freqS[ord(s[i-len(p)])-97] -= 1
            freqS[ord(s[i])-97] += 1
            if freqS == freqP:
                # print("Get anagrams:", s[i-len(p)+1:i+1])
                res.append(i+1-len(p))

        return res
