var threeSum = function (nums) {
    nums.sort((a, b) => (a - b))
    const res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        let target = -nums[i]
        console.log(left, right, target)
        while (left < right) {
            if (nums[left] + nums[right] === target) {
                res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--
            }
            if (nums[left] + nums[right] > target) {
                right--
            } else {
                left++
            }
        }
    }
    return res
};

var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => (a - b))
    let res = nums[0] + nums[1] + nums[2] - target

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        let left = i + 1; right = nums.length - 1

        let temp
        while (left < right) {
            temp = nums[i] + nums[left] + nums[right]
            // console.log(temp)
            if (Math.abs(temp - target) < Math.abs(res)) {
                res = temp - target
                while (left < right && nums[left] === nums[left + 1]) left++
                while (left < right && nums[right] === nums[right - 1]) right--
            }
            if (temp > target) {
                right--
            } else {
                left++
            }

        }
    };
    return res + target
}
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

var fourSum = function (nums, target) {
    nums.sort((a, b) => (a - b))
    const res = []
    for (let i = 0; i < nums.length - 3; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        }
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue
            }
            let left = j + 1
            let right = nums.length - 1
            // console.log(left, right, target)
            while (left < right) {

                if (nums[i] + nums[j] + nums[left] + nums[right] === target) {
                    res.push([nums[i], nums[j], nums[left], nums[right]])
                    while (left < right && nums[left] === nums[left + 1]) left++
                    while (left < right && nums[right] === nums[right - 1]) right--
                }
                if (nums[i] + nums[j] + nums[left] + nums[right] > target) {
                    right--
                } else {
                    left++
                }
            }
        }
    }
    if (res.length === 0 && nums[0] + nums[1] + nums[2] + nums[3] === target) return [nums]
    return res
};




var mergeTwoLists = function (l1, l2) {
    const dummy = new ListNode()
    let temp = dummy
    while (l1 && l2) {
        if (l1.val >= l2.val) {
            temp.next = l2
            l2 = l2.next
        } else {
            temp.next = l1
            l1 = l1.next
        }
        temp = temp.next
    }
    l1 ? temp.next = l1 : temp.next = l2;
    return dummy.next
};



function meandering(arr) {
    arr.sort((a, b) => a - b)
    let left = 0
    let right = arr.length - 1
    let res = []
    while (left < right) {
        res.push(arr[right])
        res.push(arr[left])
        right--
        left++
    }
    if (left === right) {
        res.push(arr[left])
    }
    return res
}