

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
