# 6-13
# 300. Longest Increasing Subsequence

def lengthOfLIS(self, nums: List[int]) -> int:
    # Sliding Window? Dynamic Programming
    # get the LIS based on the previous interger's LIS
    if not nums:
        return 0
    dp = [1]*len(nums)
    for i in range(len(nums)):
        for j in range(i):
            if nums[i] > nums[j]:
                dp[i] = max(dp[i], dp[j]+1)

    print(dp)
    res = max(dp)

    return res


# 6-15
# 1268. Search Suggestions System
def suggestedProducts(self, products: List[str], searchWord: str) -> List[List[str]]:
    # string manipulation
    res = []
    products.sort()
    for i in range(len(searchWord)):
        temp = []
        for word in products:
            if word[:i+1] == searchWord[:i+1]:
                temp.append(word)
        res.append(temp[:3])
    return res

# 572. Subtree of Another Tree
# Can't just compare the node, You have to compare each node's val, dfs


def isSubtree(self, s: TreeNode, t: TreeNode) -> bool:
    if self.isMatch(s, t):
        return True
    if not s:
        return False
    return (self.isSubtree(s.left, t) or self.isSubtree(s.right, t))


def isMatch(self, s, t):
    # return if s and t are same
    if not (s and t):
        return s is t
    return (s.val == t.val and self.isMatch(s.left, t.left) and self.isMatch(s.right, t.right))


# 6-16
# #138. Copy List with Random Pointer

def copyRandomList(self, head: 'Node') -> 'Node':
    if not head:
        return None
    mapping = {}
    # use mapping to copy the val and next and random
    curr = head
    while curr:
        mapping[curr] = Node(curr.val)
        curr = curr.next

    for node in mapping:
        if node.next:
            mapping[node].next = mapping[node.next]
        if node.random:
            mapping[node].random = mapping[node.random]
    return mapping[head]

# 240. Search a 2D Matrix II


def searchMatrix(self, matrix, target):
    """
    Search from the bottom left
    """

    x = len(matrix)-1
    y = 0
    while x >= 0 and y < len(matrix[0]):
        if matrix[x][y] == target:
            return True
        elif matrix[x][y] < target:
            y += 1
        else:
            x -= 1
    return False
