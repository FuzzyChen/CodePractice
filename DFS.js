//Permutation
const solution = (nums) => {
    let result = [];
    const solutionOne = (val = [], arr) => {
        if (arr.length <= 1) {
            return [[...val, ...arr]];
        }
        const tempResult = [];
        for (let i = 0; i < arr.length; i++) {
            let tempArr = JSON.parse(JSON.stringify(arr));
            tempArr.splice(i, 1);
            tempResult.push(...solutionOne([...val, arr[i]], tempArr));
        }
        return tempResult;
    }
    result = solutionOne([], nums);
    return result;
}
//BFS Permutation
var permute = function (nums) {
    if (nums.length === 0) return [[]];
    res = []
    let stack = []
    for (let i = 0; i < nums.length; i++) stack.push([nums[i]])
    console.log(stack)
    while (stack.length) {
        let last = stack.pop()
        if (last.length === nums.length) {
            res.push(last);
            continue
        }
        for (let i = 0; i < nums.length; i++) {
            if (!last.includes(nums[i])) {
                stack.push(last.concat(nums[i]))
            }
        }
    }

    return res
};


var subsets = function (nums) {
    let result = [];
    dfs([], 0);

    function dfs(current, index) {
        result.push(current);
        for (let i = index; i < nums.length; i++) {
            dfs(current.concat(nums[i]), i + 1);
        }
    }

    return result;
};