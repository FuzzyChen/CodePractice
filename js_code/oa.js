// function absolute_moves(moves) {
//     let absolute = []
//     for (let i = 0; i < moves.length; i++) {
//         console.log(absolute)
//         if (moves[i] == './') {
//             continue
//         } else if (moves[i] == '../') {
//             if (absolute.length > 0) {
//                 absolute.pop()
//             }
//         } else {
//             absolute.push(moves[i])
//         }
//     }
//     return absolute.length
// }


// const moves = ['x/', 'y/', '../', 'z/', './']
// console.log(absolute_moves(moves))

// upgrading juction box

function findRestaurant(allLocations, numRest) {
    const distArr = []
    const resArr = []
    for (let i = 0; i < allLocations.length; i++) {
        distArr.push([i, allLocations[i][0] * allLocations[i][0] + allLocations[i][1] * allLocations[i][1]])
    }
    distArr.sort((a, b) => {
        return a[1] - b[1]
    })
    for (let i = 0; i < numRest; i++) {
        resArr.push(allLocations[distArr[i][0]])
    }
    return resArr
}
// let input = [[1, 2], [3, 4], [1, -1]]
// console.log(findRestaurant(input, 2))

// Two Sum 变形
function applicationPair(deviceCompacity, foreList, backList) {
    foreList.sort((a, b) => a[1] - b[1])
    backList.sort((a, b) => a[1] - b[1])
    let l = 0;
    let r = backList.length - 1
    let result = []
    let curDiff = Infinity
    while (l < foreList.length && r >= 0) {
        let [id1, i] = foreList[l]
        let [id2, j] = backList[r]
        if (deviceCompacity - i - j == curDiff) {
            result.push([id1, id2])
        } else if (i + j <= deviceCompacity && deviceCompacity - i - j < curDiff) {
            result = []
            result.push([id1, id2])
            curDiff = deviceCompacity - i - j
        }
        if (deviceCompacity > i + j) {
            let tmp_r = r
            while (foreList[l][1] + backList[tmp_r][1] == deviceCompacity - curDiff) {
                tmp_r -= 1
                if (tmp_r < 0) break;
                if (foreList[l][1] + backList[tmp_r][1] == deviceCompacity - curDiff)
                    result.push([foreList[l][0], backList[tmp_r][0]])
            }
            l++
        } else {
            if (deviceCompacity == i + j) {
                let tmp_l = l
                while (foreList[tmp_l][1] + backList[r][1] == deviceCompacity) {
                    tmp_l += 1
                    if (tmp_l == foreList.length) break;
                    if (foreList[tmp_l][1] + backList[r][1] == deviceCompacity)
                        result.push([foreList[tmp_l][0], backList[r][0]])
                }
            }
            r--
        }
    }

    if (result.length === 0) result.push([]);
    return result
}
let foreTest = [[1, 5], [2, 5]]
let backTest = [[1, 5], [2, 5]]
// console.log(applicationPair(11, foreTest, backTest))
// console.log(applicationPair(20, a, b))



function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
}
function remove_arr(array) {
    if (!array || array.length < 2) return [];
    let num_remained = Counter(array)
    let num_to_remove = {}
    for (let num in num_remained) {
        if (num_remained[num] > 1) num_to_remove[num] = num_remained[num] - 1
    }
    if (!num_to_remove) return [];
    let res = []
    for (let num of array) {
        num_remained[num] -= 1
        if (num in num_to_remove) { //[1, 2, 3, 4, 5, 2, 2, 5, 6, 6]
            while (res && res[res.length - 1] > num) {
                if (res[res.length - 1] in num_to_remove) {
                    num_to_remove[res[res.length - 1]] += 1
                }
                else {
                    num_to_remove[res[res.length - 1]] = 1 //{2:1, 5:1, 6:1}
                }

                if (num_to_remove[res[res.length - 1]] > num_remained[res[res.length - 1]]) {
                    return [-1]
                }
                res.pop()
            }
            res.push(num)
            num_to_remove[num] -= 1
            if (num_to_remove[num] == 0) {
                delete num_to_remove[num]
            }
        }

    }
    return res
}

console.log(remove_arr([1, 2, 3, 4, 5, 2, 2, 5, 6, 6]))

