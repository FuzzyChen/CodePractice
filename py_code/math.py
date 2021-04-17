# 264 ugly number 2
class Solution:
    def nthUglyNumber(self, n: int) -> int:
        # brute false, check every num
        count = 1
        cur = 2
        while count < n:
            if self.isUgly(cur):
                count += 1
            cur += 1
        return cur - 1

    def isUgly(self, n):
        while n != 1:
            if n % 2 != 0 and n % 3 != 0 and n % 5 != 0:
                return False
            elif n % 2 == 0:
                n = n / 2
                continue
            elif n % 3 == 0:
                n = n / 3
                continue
            elif n % 5 == 0:
                n = n / 5
                continue
        return True


class Solution:
    def nthUglyNumber(self, n: int) -> int:
        # record every time
        res = [1]
        while len(res) < n:
            temp2 = [2*x for x in res if 2*x > res[-1]]
            temp3 = [3*x for x in res if 3*x > res[-1]]
            temp5 = [5*x for x in res if 5*x > res[-1]]
            temp = temp2+temp3+temp5
            # print(temp)
            res.append(min(temp))
        return res[-1]
