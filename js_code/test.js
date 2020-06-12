const input = [1, 2, 3, 4, 5]

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

console.log(meandering([1, 2, 3, 4, 5]))