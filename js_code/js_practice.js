



//56.intervals
var merge = function (intervals) {
    intervals.sort(function (a, b) { return a[0] - b[0] })
    for (let i = 0; i < intervals.length - 1; ++i) {
        if (intervals[i][1] >= intervals[i + 1][0]) {
            if (intervals[i][1] >= intervals[i + 1][1]) {
                intervals.splice(i + 1, 1)
                i--
            }
            else {
                intervals.splice(i, 2, [intervals[i][0], intervals[i + 1][1]])
                i--
            }

        }
    }
    return intervals
};




//525.Contiguous Array
//Brute Force
var findMaxLength = function (nums) {
    let maxLen = 0
    for (let i = 0; i < nums.length; i++) {
        let zeroes = 0
        let ones = 0
        for (let j = i; j < nums.length; j++) {
            if (nums[j] === 0) {
                zeroes++
            }
            else {
                ones++
            }
            if (zeroes === ones) {
                maxLen = Math.max(maxLen, j - i + 1)
            }
        }
    }
    return maxLen

};

//Zig-Zag
function convert(s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const N = s.length;
    const arr = [...Array(numRows)].map(r => []);

    for (let i = 0; i < N; i++) {
        const pos = i % (2 * numRows - 2);
        const ii = pos < numRows ? pos : 2 * numRows - 2 - pos;
        arr[ii].push(s[i]);
    }

    return arr.map(r => r.join('')).join('');
}



//132 pattern  O(n**2)
var find132pattern = function (nums) {
    let min_i = Infinity;
    for (let j = 0; j < nums.length - 1; j++) {
        min_i = Math.min(min_i, nums[j])
        for (let k = j + 1; k < nums.length; k++) {
            if (min_i < nums[k] && nums[k] < nums[j]) {
                return true
            }
        }
    }
    return false
};
// 表单录入 前后端都要验证