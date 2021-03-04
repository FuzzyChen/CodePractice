function mergeSort(unsortedArray) {
    if (unsortedArray.length <= 1) { return unsortedArray }
    const mid = Math.floor(unsortedArray.length / 2)
    const left = unsortedArray.slice(0, mid)
    const right = unsortedArray.slice(mid)
    return merge(
        mergeSort(left), mergeSort(right)
    )
}

function merge(left, right) {
    let leftIndex = 0
    let rightIndex = 0
    let resultArray = []
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}

// console.log(mergeSort([5, 4, 3, 2, 1]))


// quick sort
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[0]
    const left = []
    const right = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot]).concat(quickSort(right))
}
console.log(quickSort([5, 3, 9, 4, 2, 1]))
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] > arr[j]) {
//                 //swap
//                 temp = arr[i]
//                 arr[i] = arr[j]
//                 arr[j] = temp
//             }
//         }
//     }
//     return arr
// }