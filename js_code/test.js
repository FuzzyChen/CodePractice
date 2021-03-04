// // function merge(itemArray) {
// //     let arr = []
// //     const set = new Set()
// //     itemArray.forEach(item => {
// //         for (let i = 0; i < item.length; i++) {
// //             if (set.has(item[i])) {
// //                 continue
// //             }
// //             set.add(item[i])
// //             arr.push(item[i])
// //         }
// //     })
// //     return arr
// // }

// // const input1 = [[1, 2, 3], [2, 3], [5, 4, 3]]
// // console.log(merge(input1))

// // function T1() {
// //     this.name = 't1'
// //     this.age = 19
// // }

// // function T2() {
// //     this.name = 't2'
// //     this.age = 19
// //     return 19
// // }

// // function T3() {
// //     this.name = 't3'
// //     this.age = 19
// //     return {
// //         name: 't',
// //         age: 19
// //     }
// // }

// // function T4() {
// //     this.name = 't4'
// //     this.age = 19
// // }

// // console.log(new T1())
// // console.log(new T2())
// // console.log(new T3())
// // //感觉 prototype 不会显示
// // T4.prototype = new T1()
// // T4.prototype.type = 'export'
// // const t4 = new T4()
// // console.log(t4)
// // console.log(t4.type)




// //xiaowei.xue@shopee.com

// const https = require('https');
// const { hostname } = require('os');

// https.get('https://jsonmock.hackerrank.com/api/movies?Year=2010', (res) => {
//     console.log('statusCode:', res.statusCode);

//     res.on('data', (data) => {
//         const jsonArr = JSON.parse(data).data
//         console.log(jsonArr.length)
//         if (jsonArr.length == 0) {
//             console.log('emptyyyyyy')
//         }
//         else {
//             console.log(jsonArr.map(obj => obj.Title))
//         }
//     });

// })


// let arr = [1, 2, 3]
// console.log(arr.get(1))


//BQ
// for entry level, detailed, every sprint, make the requirement clear, make develoepment easier.
// But I also like undetailed, chanllenge

// === value and type
//


// console.log(null == undefined)

// Node js can return html, as a backend framework
// in React, HOC is inheritance some feature from parent component


// map return a new object 

// fioler  new array ;    reducer single

// primitive 

// function af(arr) {
//     var s = arr.reduce(function (a, b) {
//         return a + b;
//     }, 0);
//     const n = arr.length
//     const leftHalf = [0] * (n / 2)
//     if (s % 2) {
//         return -1
//     } else {
//         return 1
//     }
//     return -1
// }

// console.log(af([1, 2, 3, 4]))


// function a() {
//     function b() {
//         console.log(myVar)
//     }
//     var myVar = 2
//     b()
// }
// a()

// class ListNode {
//     constructor(val) {
//         this.val = val
//         this.next = null
//     }
// }

// let node1 = new ListNode(2)
// let node2 = new ListNode(5)
// node1.next = node2
// console.log(node1)
// var maxUncrossedLines = function (A, B) {
//     const m = A.length
//     const n = B.length
//     let dp = [...Array(m + 1)].map(x => Array(n + 1).fill(0));
//     console.log(dp)
//     for (let i = 1; i <= m; i++)
//         for (let j = 1; j <= n; j++)
//             dp[i][j] = A[i - 1] == B[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i][j - 1], dp[i - 1][j]);
//     return dp[m][n];
// };
// // console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]))

// console.log('1')
// async function async1() {
//     console.log('2')
//     await console.log('3')
//     console.log('4')
// }

// setTimeout(function () {
//     console.log('5')
// }, 0)

// async1()
// new Promise(function (resolve) {
//     console.log('6')
//     resolve()
// }).then(function () {
//     console.log('7')
// })
// console.log('8')


// let x = 5
// function fn(x) {
//     return function (y) {
//         console.log(y + (++x))
//     }
// }
// let f = fn(6)
// f(7)
// console.log(x)

// let object = { a: 0 }
// // 123
// function fun(obj) {
//     obj.a = 1; //123
//     obj = { a: 2 };
//     //456
//     obj.b = 2;
//     console.log(obj)
// }
// fun(object)
// console.log(object)

// 奇偶排序 奇数升序 偶数降序 位置不变

// function oddEvenSort(arr) {
//     // 把奇偶分别的index找出来 然后各自排序组成新的数组 最后组合
//     oddIndex = []
//     evenIndex = []
//     for (let i = 0; i < arr.length; i++) {

//     }
//     return
// }

// 版本比较 
// let version1 = '0.1'
// let version2 = '1.0.1'
// function compareVersion(s1, s2) {
//     arr1 = s1.split('.')
//     arr2 = s2.split('.')
//     minL = Math.min(s1.length, s2.length)
//     for (let i = 0; i < minL; i++) {
//         if (arr1[i] > arr2[i]) {

//         }
//     }
// }

// function reverseSentence(s1) {
//     let res = s1.split(' ').reverse().join(' ')
//     let arr1 = res.split('')
//     console.log(res)
//     console.log(arr1)
//     let pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
//     let left;
//     let right;
//     //这里再次进行查找特殊字符
//     for (let index = 0; index < arr1.length; index++) {
//         if (pattern.test(arr1[index])) {
//             left = index
//             while (pattern.test(arr1[index + 1])) {
//                 index++
//             }
//             right = index
//             //这里做一个翻转就行了
//             let tempL = arr1.slice(0, left)
//             let temp = arr1.slice(left, right + 1).reverse()
//             let tempR = arr1.slice(right + 1)
//             arr1 = tempL.concat(temp.concat(tempR))
//         }
//     }
//     return arr1.join('')
// }

// console.log(reverseSentence('Today is a nice  0123day!?@ right'))

// queue, push shift()
// stack, push pop() 
// const prerequisites = [[1, 0], [0, 1]]
// for (let [to_node, from_node] of prerequisites) {
//     console.log(to_node)
//     console.log(from_node)
// }
// function subString(sub_s) {
//     let string = ''
//     let i = 0
//     for (let s of sub_s) {
//         if (typeof s !== 'string') {
//             string += subString(s) + ' AND '
//         }
//         else {
//             string += "\"" + s + "\"";
//             //已经是子结构了，直接用OR连接
//             if (i < sub_s.length - 1) {
//                 // 用len - 1个or连接
//                 string += ' OR '
//             }
//         }
//         i += 1
//     }
//     return '(' + string + ')'
// }
// const inp = [[["java", "maven", "spring"], "python"], ["machine learning", "deep learning"]]
// let str = subString(inp)
// console.log(str)
// str = str.replace('AND )', '')
// console.log(str)

// haitu
// function count_working_months(str) {
//     let totalMonth = 0;
//     let jobArr = str.split('\n')
//     let timeArr = []
//     // 我这个就是先把时间都抓出来放到timeArr里面 然后去掉重复的时间段 最后计算
//     for (let exp of jobArr) {
//         let temp = exp.split(' ')
//         for (let index = 0; index < temp.length; index++) {
//             if (temp[index] === '~') {
//                 //这里判断时间有没有交错
//                 if (timeArr.length > 0 &&
//                     Date.parse(temp[index - 1]) <= Date.parse(timeArr[timeArr.length - 1])) {
//                     timeArr.pop()
//                 } else {
//                     timeArr.push(temp[index - 1])
//                 }
//                 timeArr.push(temp[index + 1])
//             }
//         }
//     }
//     // 这里已经完成了string操作 接下来计算就可以了
//     for (let i = 0; i < timeArr.length; i += 2) {
//         let tempYear0, tempYear1, tempMonth0, tempMonth1
//         if (timeArr[i + 1] === 'present') {
//             tempYear1 = new Date().getFullYear()
//             tempMonth1 = new Date().getMonth() + 1
//         } else {
//             tempYear1 = timeArr[i + 1].slice(0, 4)
//             tempMonth1 = timeArr[i + 1].slice(5, 7)
//         }
//         tempYear0 = timeArr[i].slice(0, 4)
//         tempMonth0 = timeArr[i].slice(5, 7)
//         totalMonth += (tempYear1 - tempYear0) * 12 + (Number(tempMonth1) - Number(tempMonth0))
//     }
//     console.log(timeArr)
//     return totalMonth
// }
// let input_str = "job1: 2015-01-01 ~ 2017-01-01 \n job2: 2016-01-01 ~ 2017-01-01 \n job3: 2017-01-01 ~ present"
// console.log(count_working_months(input_str))
var addStrings = function (num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = '';
    for (; i >= 0 || j >= 0 || carry > 0; i--, j--) {
        // -‘0’ 就是把string变成数字
        const digit1 = i < 0 ? 0 : Number(num1.charAt(i));
        const digit2 = j < 0 ? 0 : Number(num2.charAt(j));
        const digitsSum = digit1 + digit2 + carry;
        // 判断一下有没有 大于10
        sum = `${digitsSum % 10}${sum}`;
        carry = Math.floor(digitsSum / 10);
    }
    return sum;
};
function addFloat(num1, num2) {
    //下面是将两浮点数对齐
    //ex 12.12 133.133  ==》 012.120 133.133
    let index1 = num1.split('').indexOf(".");
    let index2 = num2.split('').indexOf(".");
    res1 = (index1 > index2) ? num1 : num2;
    res2 = (index1 > index2) ? num2 : num1;
    let n = (index1 > index2) ? (index1 - index2) : (index2 - index1);
    while (n--) {
        res2 = "0" + res2;
    }
    let len1 = res1.length;
    let len2 = res2.length;
    num1 = (len1 > len2) ? res1 : res2;
    num2 = (len1 > len2) ? res2 : res1;
    n = (len1 > len2) ? (len1 - len2) : (len2 - len1);
    while (n--) {
        num2 += "0";
    }
    // 第一部分到这就 两个数字对其之后 从小数点分开 开始分别计算
    let index = num1.split('').indexOf(".")
    let int1 = num1.slice(0, index)
    let float1 = num1.slice(index + 1)
    let int2 = num2.slice(0, index)
    let float2 = num2.slice(index + 1)
    let int = addStrings(int1, int2)
    let float = addStrings(float1, float2)
    if (float.length > float1.length) {
        float = float.slice(1)
        int = `${Number(int) + 1}`
    }
    return int + '.' + float
}
// console.log(addFloat('12.12', '133.99'))
// 这个输入两个数 第一步就是把空位用0 补气  然后直接调用第一个函数应该很快就出来了

// 其他主要是后端的问题

// console.log('开始')
// setTimeout(() => {
//     console.log('信息')
// }, 0);
// console.log('执行')

// 开始
// 执行
// for loop
// 结束
// then function
// 信息

// new Promise(resolve => {
//     console.log('for loop');
//     for (var i = 0; i < 100; i++) {
//         i == 99 && resolve()
//     }
// }).then(() => {
//     console.log('then function')
// })
// console.log('结束')
//这里面的组合是唯一吗 有没有 ab ac之类的  唯一的话就直接for循环出来了
function findLength(matrix) {
    let head, tail, maxLength = 0;
    let tempArr;
    while (matrix.length > 0) {
        tempArr = matrix.pop() // 每次temp都是这次能组成的链的array
        head = tempArr[0]
        tail = tempArr[1]
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i][0] === tail) { //如果遍历的数组可以当作尾巴  就组合一下
                tempArr = tempArr.concat(matrix[i])
                tail = matrix[i][1]
                matrix.splice(i, 1)
                i--
            }
            else if (matrix[i][1] === head) { //如果遍历的数组可以当作头  就组合一下
                tempArr = matrix[i].concat(tempArr)
                matrix.splice(i, 1)
                head = matrix[i][0]
                i--
            }
        }
        maxLength = Math.max(tempArr.length, maxLength) //这个地方打错了
        console.log(tempArr)
        console.log(maxLength)
    }
    //return 在while 外面
    return maxLength
}

const testInput = [['a', 'b'], ['c', 'd'], ['b', 'c'], ['d', 'f'], ['x', 'y']]
// const testInput = [['a', 'b'], ['c', 'd'], ['b', 'c']]
// console.log(findLength(testInput))

// console.log(1)
// setTimeout(() => {
//     console.log(2)
//     Promise.resolve().then(() => {
//         console.log(3)
//     })
// })
// new Promise((resolve, reject) => {
//     console.log(4)
//     resolve(5)
// }).then((data) => {
//     console.log(data)
// })
// setTimeout(() => {
//     console.log(6)
// })
// console.log(7)
function parseParam(url) {
    let params = url.split('?')[1]; //截取?号后的字符串即name=itclanCoder&study=css
    let param = params.split('&'); // 通过&符号进行分割即["name=itclanCoder", "study=css"]
    let obj = {}; // 用一个对象存储目标值
    for (let i = 0; i < param.length; i++) { // 循环遍历截取出来的param数组
        let currentParam = param[i].split('='); // 通过split,=继续对数组params每一项进行分割,生成数组["name", "itclanCoder"]
        let key = currentParam[0];
        let value = currentParam[1];
        if (key in obj) {
            if (Array.isArray(obj[key])) {//   里面是判断是不是数组
                obj[key].push(value)
            } else {
                obj[key] = [obj[key], value]
            }
        } else {
            obj[key] = value;
        }
    }
    return obj;
}
// let baseUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css&study=html';
// console.log(parseParam(baseUrlStr)); // {name: "itclanCoder", study: "css"]}

var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    let dummyA = headA //dummy拿来测长度 cur拿来移动
    let dummyB = headB
    let curA = headA
    let curB = headB
    let lenA = 0, lenB = 0
    while (dummyA) {
        lenA++
        dummyA = dummyA.next
    }
    while (dummyB) {
        lenB++
        dummyB = dummyB.next
    }
    if (lenA > lenB) { // p1先移动 len1 - len2的距离
        for (let i = 0; i < lenA - lenB; i++) {
            curA = curA.next
        }
    } else {
        for (let i = 0; i < lenB - lenA; i++) {
            curB = curB.next
        }
    }
    while (curA) { // 之后p1和p2同时移动, 并比较两个指针指向的节点是否相同, 如果相同,则说明两个链表相交, 返回该节点. 如果不相同, 继续移动, 直到链表结尾, 说明两个链表不相交.
        if (curA == curB) {
            return curA
        }
        curB = curB.next
        curA = curA.next
    }
    return null
};
// 得到链表1和链表2的长度, 分别记为 len1, len2, 假设 len1 > len2
// p1指向链表1的头节点, p2指向链表2的头节点

// 你再看一下例题  应该还是要readline 什么的
// 你再自测看看
function sellFruit(arrayM, arrayN, k) {
    let ans = k
    const buyInArray = arrayM.map((price, index) => [price, index])//这里变量打错了
    console.log(buyInArray)
    buyInArray.sort((a, b) => a[0] - b[0])
    // console.log(buyInArray)
    // buyInArray.filter(item => (arrayN[item[1]] - arrayM[item[1]]) > 0);// 这里还有个BUg我再看看
    // console.log(buyInArray)
    // 可能卖水果是亏钱的 我还没把哪个算进去 
    while (buyInArray.length && k >= buyInArray[0][0]) { //还可以继续买卖
        let tempIndex = buyInArray[0][1]
        ans += arrayN[tempIndex] - buyInArray[0][0]
        buyInArray.splice(0, 1)
    }
    return ans
}
let testM = [4, 2, 6, 4] // testM = readline().split(',').map(num => parseInt(num)) 是数组
let testN = [5, 3, 5, 7] // testM = readline().split(',').map(num => parseInt(num)) 是数组
let testK = 15
// console.log(sellFruit(testM, testN, testK))

// const timeArr = []
// while (true) {
//     let tempTime = readline()  
//     if (tempTime == undefined) { 
//         break
//     } else {
//         timeArr.push(tempTime)
//     }

// }
let testTime = [
    '2019-01-01 00:00:00.123',
    '2019-01-01 00:00:00.123',
    '2019-01-01 00:00:00.123',
    '2019-01-01 00:00:00.120',
    '2020-01-01 00:09:00.125'
]
// 这个应该就这么
function shopFree(timeArr) {
    let count = 0
    let newArr = []
    const record = new Map()
    for (let i = 0; i < timeArr.length; i++) {
        let [time, fff] = timeArr[i].split('.')
        newArr.push([time, parseInt(fff)])
    }
    for (let order of newArr) {
        if (record.get(order[0])) {
            if (Array.isArray(record.get(order[0]))) {
                if (record.get(order[0])[0] > order[1]) {
                    record.set(order[0], order[1])
                    count -= record.get(order[0]).length
                    count++
                } else if (record.get(order[0]) < order[1]) {
                    continue
                } else { //相等的情况 多人同时下单
                    record.get(order[0]).push(order[1])
                    count++
                }
            }
            else {
                if (record.get(order[0]) > order[1]) {
                    record.set(order[0], order[1])
                } else if (record.get(order[0]) < order[1]) {
                    continue
                } else { //相等的情况 两人同时下单
                    record.set(order[0], [order[1], order[1]])
                    count++
                }
            }


        } else {
            count++
            record.set(order[0], order[1])
        }
    }
    return count
}
// console.log(shopFree(testTime))

function subSequenceRemove(arr) {

}
let testArr = [3, 3, 5, 7, 5, 8]
console.log(subSequenceRemove(testArr))
