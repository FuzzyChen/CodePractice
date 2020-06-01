//Binary Search

// const input = [1, 3, 4, 5]
// var searchInsert = function (nums, target) {
//     let left = 0
//     let right = nums.length - 1
//     let mid
//     while (left < right) {
//         mid = Math.floor((left + right) / 2)
//         console.log('the mis point is: ', mid)
//         if (nums[mid] === target) {
//             return mid
//         } else if (nums[mid] > target) {
//             right = mid
//         } else {
//             left = mid + 1
//         }
//     }
//     if (nums[left] >= target) {
//         return left
//     } else {
//         return left + 1
//     }
// };

// var findMin = function (nums) {
//     let left = 0
//     let right = nums.length - 1
//     let mid
//     while (left + 1 < right) {
//         mid = Math.floor((left + right) / 2)
//         if (nums[mid] < nums[mid + 1] && nums[mid] < nums[mid - 1]) {
//             return nums[mid]
//         } else if (nums[mid] <= nums[nums.length - 1]) {
//             right = mid
//         } else {
//             left = mid
//         }
//     }
//     console.log(left, right)
//     return Math.min(nums[left], nums[right])
// };
// console.log(findMin(a))



//-------------------------------------------------------------------------