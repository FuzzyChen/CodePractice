class Solution:
    def reverseVowels(self, s: str) -> str:
        s = list(s)
        vowelArr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
        left = 0
        right = len(s)-1
        while left < right:
            while left < right and s[left] not in vowelArr:
                left += 1
            while left < right and s[right] not in vowelArr:
                right -= 1
            if left < right:
                temp = s[left]
                s[left] = s[right]
                s[right] = temp
                left += 1
                right -= 1

        return ''.join(s)


def lengthOfLongestSubstring(self, string):
    longest = 0
    left, right = 0, 0
    chars = set()
    while left < len(string) and right < len(string):
        if string[right] not in chars:
            chars.add(string[right])
            right += 1
            longest = max(longest, right - left)
        else:
            chars.remove(string[left])
            left += 1
    return longest
