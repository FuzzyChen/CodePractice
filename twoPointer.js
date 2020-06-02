var threeSum = function (nums, target) {
    nums.sort((a, b) => (a - b))
    const res = nums[0] + nums[1] + nums[2] - target
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1; right = nums.length - 1
        let temp
        while (left < right) {
            temp = nums[i] + nums[left] + nums[right]
            if (Math.abs(temp - target) < res) {
                res = Math.abs(temp - target)
                // while (left < right && nums[left] === nums[left + 1]) left++
                // while (left < right && nums[right] === nums[right - 1]) right--
            }
            if (temp > target) {
                right--
            } else {
                left++
            }
        }
    }
    return res
};


var removeDuplicates = function (nums) {
    let count = 0
    let dic = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums
};

const nums = [-1, 2, 1, -4]
console.log(threeSum(nums, 1))


var validPalindrome = function (s) {
    if (s === '') {
        return true
    }
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else {
            return helper(left, right - 1) || helper(left + 1, right)
        }
    }
    return true
    function helper(l, r) {
        while (l < r) {
            if (s[l] === s[r]) {
                l++
                r--
            } else {
                return false
            }
        }
        return true
    }

};


