function isInteger(value) {
    return /^\d+$/.test(value);
}

function canBeEvaluated(input) {
    // string convert to list 
    let list1 = input.split('\n')
    console.log(list1)
    const searchList = []
    const dic = new Map()
    const helper = (s) => {
        const pattern = /[`~!@#$^&*()=|{}':;',\\\[\]\.<>\/?~！@#￥……&*（）——|{}【】'；：""'。，、？\s]/g;
        return s.replace(pattern, ' ').split()
    }
    for (let i = 0; i < list1.length; i++) {
        let [key, value] = list1[i].split('=')
        if (isInteger(value)) {
            dic.set(key, true)
        } else {
            //filter the symbol and number 正则表达
            searchList.push([key, helper(value)])
        }
    }

    // dic to refer
    // {AA00: true,
    // AB00: true}

    // searchList
    // [
    // [AA01,['AA00','AB00']
    // ]

    console.log(dic)
    console.log(searchList)

    for (let index = 0; index < searchList.length; index++) {
        let tempNeededDic = new Map()
        // check 
        for (let i = 0; i < searchList[index][1].length; i++) {
            let dependentV = searchList[index][1][i]
            if (dependentV in dic) {
                continue
            } else {
                if (dependentV in tempNeededDic) {
                    return 'The Excelsheet can not be evaluated'
                }
                else {
                    tempNeededDic.set(dependentV, true)
                }
            }
        }
    }
    return 'The Excelsheet can be evaluated'

}

const input1 = 'AA00 = 10 \n AA01 = AA00 + AB00 \nå AB00 = 15'
const input2 = 'AA00 = 10 AB00 = ( AA00 + AA01 ) * 15 AA01 = 20 + AB00 '
console.log(canBeEvaluated(input1))