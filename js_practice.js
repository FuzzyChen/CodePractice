// 1: flatten array, given an array [
//     1,
//     2,
//     [3,4, [5,6,0]], 4,
//     [3,7],
//     0
//     ];
//     Output: [1,2,3,4,5,6,0,4,3,7,0] all items flat in another array, need 2 solutions ​DFS and BFS

//BFS



//DFS



//3 sum
var threeSum = function(nums) {
    let res = []
    nums.sort(function(a, b){return a-b})
    console.log(nums)
    for(let i=0; i < (nums.length-2); i++){
        if (nums[i]>0){break}
        if (nums[i] == nums[i-1]){continue}
        let l = i+1
        let r = nums.length-1
        while ( l < r) {
            if (nums[l] + nums[r] === -nums[i]) {
                res.push([nums[i],nums[l],nums[r]])
                while (l<r && nums[l] == nums[l+1]){l += 1}     
                while (l<r && nums[r] == nums[r-1]){r -= 1}
                        
                l += 1
                r -= 1
            }
            else if (nums[l] + nums[r] < -nums[i]) {
                l +=1
            }
            else {
                r -= 1
            }
        }
    }
    return res;
};


//Permutation
const solution = (nums) => {
    let result = [];
    const solutionOne = (val = [],arr) => {
        if(arr.length <=1 ){
            return [[...val,...arr]];
        }
        const tempResult = [];
        for(let i = 0; i< arr.length; i++) {
            let tempArr = JSON.parse(JSON.stringify(arr));
            tempArr.splice(i,1);
            tempResult.push(...solutionOne([...val,arr[i]],tempArr));
        }
        return tempResult;
    }
    result = solutionOne([],nums);
    return result;
}


var permute = function(nums,set = [],answer = []) {
    if(!nums.length){answer.push([...set])}
    for(let i =0; i<nums.length;i++){
        const newNums = nums.filter((n,index) => index !== i);
        set.push(nums[i]);
        permute(newNums,set,answer);
        set.pop();
    }
    return answer;
}


//56.intervals
var merge = function(intervals) {
    intervals.sort(function(a,b){return a[0]-b[0]})
    for (let i = 0; i<intervals.length-1;++i){
        if(intervals[i][1]>=intervals[i+1][0]){
            if(intervals[i][1]>=intervals[i+1][1]){
                intervals.splice(i+1,1)
                i--
            }
            else {
                intervals.splice(i,2,[intervals[i][0],intervals[i+1][1]])
                i--
            }
            
        }
    }
    return intervals
};




//525.Contiguous Array
//Brute Force
var findMaxLength = function(nums) {
    let maxLen = 0
    for(let i = 0; i<nums.length; i++){
        let zeroes = 0
        let ones = 0
        for(let j=i; j<nums.length;j++){
            if(nums[j]===0){
                zeroes++
            }
            else{
                ones++
            }
            if (zeroes===ones) {
                maxLen = Math.max(maxLen,j-i+1)
            }
        }
    }
    return maxLen
    
};

//Zig-Zag
function convert(s, numRows) {
    if (numRows === 1) {
      return s;
    }
  
    const N = s.length;
    const arr = [...Array(numRows)].map(r => []);
  
    for (let i = 0; i < N; i++) {
      const pos = i % (2*numRows-2);
      const ii = pos < numRows ? pos : 2*numRows-2-pos;
      arr[ii].push(s[i]);
    }
  
    return arr.map(r => r.join('')).join('');
  }



//132 pattern  O(n**2)
var find132pattern = function(nums) {
    let min_i = Infinity;
        for(let j =0; j<nums.length-1; j++){
            min_i = Math.min(min_i,nums[j])
            for (let k=j+1; k<nums.length;k++){
                if(min_i<nums[k] && nums[k] <nums[j] ) {
            return true
            }
        } 
    }
    return false
};
