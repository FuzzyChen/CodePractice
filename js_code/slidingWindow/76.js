// start / minL final result 
// left / right the window
// valid to judge the window

var minWindow = function (s, t) {
    const counterS = new Map()
    const counterT = new Map()
    for (let char of t) {
        counterT.set(char, counterT.get(char) + 1 || 1)
    }
    let left = 0;
    // use valid to maintain the window, if match, record the size 
    let valid = 0;
    let start = -1;
    let minL = Infinity
    for (let right = 0; right < s.length; right++) {
        let ch = s[right]
        if (counterT.get(ch)) {
            counterS.set(ch, counterS.get(ch) + 1 || 1)
            if (counterS.get(ch) === counterT.get(ch)) valid++
        }
        // start 
        while (valid === counterT.size) {
            if (right - left < minL) {
                minL = right - left
                start = left
            }
            let left_ch = s[left]
            left += 1
            if (counterS.get(left_ch)) {
                counterS.set(left_ch, counterS.get(left_ch) - 1)
                if (counterS.get(left_ch) < counterT.get(left_ch)) {
                    valid--
                }
            }
        }
    }
    if (start == -1) return ''
    return s.substring(start, start + 1 + minL)
};