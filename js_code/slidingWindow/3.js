var lengthOfLongestSubstring = function (s) {
    let start = 0
    let maxL = 0
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (map.get(char) >= start) {
            start = map.get(char) + 1
        }

        map.set(char, i)
        maxL = Math.max(maxL, i - start + 1)
    }
    return maxL
};