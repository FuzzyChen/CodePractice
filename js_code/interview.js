// //  build()
// function riverWalk(matrix) {
//     const m = matrix.length
//     if (m === 0) return 0
//     const n = matrix[0].length
//     const direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]
//     for (let i = 0; i < m; i++) {
//         if (matrix[i][0] == 1) {
//             res = bfs([i, 0], JSON.parse(JSON.stringify(matrix)))
//             if (res) return true
//         }
//     }
//     return false

//     function bfs(currentPoint, matrix) {
//         if (currentPoint[1] === n - 1) {
//             // reach end
//             return true
//         } else {
//             matrix[currentPoint[0], currentPoint[1]] = 0
//             for (let [moveX, moveY] of direction) {
//                 let nextX = currentPoint[0] + moveX
//                 let nextY = currentPoint[1] + moveY
//                 if (martix[nextX, nextY] === 1) {
//                     if (bfs([nextX, nextY], martix)) {
//                         return true
//                     }
//                 }
//             }
//         }
//         return false
//     }
// }

// function walkTimes(matrix) {
//     let res = false
//     let n = matrix[0].length
//     let count = n
//     for (let _ = 0; _ < n; _++) {
//         build(martix)
//     }
//     while (!riverWalk(matrix)) {
//         build(matrix)
//         count++
//     }
//     return count
// }

// Dice rolling sim
function randomRes() {
    return Math.floor(Math.random() * 6) + 1
}
function rollDice(numsDice, k) { //mode就是众数  出现最多的数字
    const rolls = []
    const result = {}
    // 这里k就是玩的次数 n是每次玩几个骰子 只需要一个array可以都存起来  中间用for loop 就行
    for (let i = 0; i < k; i++) {
        let temp = 0
        for (let j = 0; j < numsDice; j++) { //这个循环就是假设一次玩多个骰子 多随机加起来
            temp += randomRes() // 这函数就是随机生成一个 1～6
        }
        rolls.push(temp)
    }
    result.rolls = rolls // set an dictionary to store
    result.mean = rolls.reduce((a, b) => a + b, 0) / k
    result.median = rolls.sort((a, b) => a - b)[Math.floor(k / 2)] //直接向下取整应该就行
    // result.mode =  

    return result

}
// console.log(rollDice(2, 4))


// Alexa device  report the battery/power
class AlexaDevice {
    constructor(name, battery, hasSpeaker, hasScreen, hasBattery) {
        this.name = name
        this.battery = battery
        this.hasSpeaker = hasSpeaker
        this.hasScreen = hasScreen
        this.hasBattery = hasBattery
    }
    checkBattery() {
        if (this.hasBattery) {
            if (this.hasSpeaker) {
                console.log(this.name + ' Speak: Battery is ' + this.battery)
            }
            if (this.hasScreen) {
                console.log(this.name + ' Show: Battery is ' + this.battery)
            }

        }
    }

}

const echo = new AlexaDevice('Echo', 10, true, true, true)