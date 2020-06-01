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

const nums = [-1, 2, 1, -4]
console.log(threeSum(nums, 1))

