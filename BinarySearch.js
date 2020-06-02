//Binary Search

function searchMatrix(matrix, target) {
    if (matrix.length === 0 || matrix[0].length === 0) return false;

    let i = 0;
    let j = matrix[0].length - 1;

    while (j >= 0 && i < matrix.length) {
        if (matrix[i][j] === target) return true;
        else if (matrix[i][j] > target) j--;
        else i++;
    }

    return false;
}
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


// var findPeakElement = function (nums) {
//     let left = 0
//     let right = nums.length - 1
//     let mid
//     while (left + 1 < right) {
//         mid = Math.floor((left + right) / 2)
//         if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
//             return mid
//         }
//         if (nums[mid] > nums[mid + 1] && nums[mid] < nums[mid - 1]) {
//             right = mid
//         } else {
//             left = mid
//         }
//     }
//     return nums[left] > nums[right] ? left : right
// };

// var myPow = function(x, n) {
//     if(n===0){
//         return 1
//     }

//     let pow = Math.abs(n)

//     let res =  pow%2 === 0 ? myPow(x*x,pow/2) : myPow(x*x,(pow-1)/2)*x
//     return n>0 ? res : 1/res
// };

//-------------------------------------------------------------------------