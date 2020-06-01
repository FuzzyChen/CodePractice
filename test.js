

let a = [1]
var findPeakElement = function (nums) {
    let left = 0
    let right = nums.length - 1
    let mid
    while (left + 1 < right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            return mid
        }
        if (nums[mid] > nums[mid + 1] && nums[mid] < nums[mid - 1]) {
            right = mid
        }
        if (nums[mid] < nums[mid + 1] && nums[mid] > nums[mid - 1]) {
            left = mid
        }
    }
    return nums[left] > nums[right] ? left : right
};

console.log(findPeakElement(a))