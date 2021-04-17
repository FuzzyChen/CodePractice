

print(rotate(matrix))


class Solution:
    def dailyTemperatures(self, T: List[int]) -> List[int]:
        l = len(T)
        res = [0]*l
        for i in range(l):
            count = 0
            while i+count < l and T[i+count] <= T[i]:
                count += 1
            if i+count < l and T[i+count] > T[i]:
                res[i] = count
        return res


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ''
        res = 0
        minL = min([len(i) for i in strs])
        print(minL)
        while res < minL:
            check = strs[0][res]
            for i in strs:
                if i[res] == check:
                    continue
                else:
                    return strs[0][:res]
            res += 1
        return strs[0][:res]
