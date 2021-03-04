// 172 Factorial Trailing Zeroes
// 计算5的个数就行 因为2 一定比5多  另外注意25 125。。。
var trailingZeroes = function (n) {
    let res = 0
    while (5 <= n) {
        res += Math.floor(n / 5)
        n = Math.floor(n / 5)
    }
    return res
};

console.log(trailingZeroes(30))

// 793. Preimage Size of Factorial Zeroes Function