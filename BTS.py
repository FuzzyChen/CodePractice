# 102. Binary Tree Level Order Traversal
# 每次循环把一层都放到queue里面，然后变成array放到res里面，
# 同时把这一层pop了，把下一层 加进去
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        if root is None:
            return []
        res = []
        queue = deque([root])
        while(queue):
            level = []
            for _ in range(len(queue)):
                node = queue.popleft()
                level.append(node.val)
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
            res.append(level)
        return res


class Solution:
    def convertBST(self, root: TreeNode) -> TreeNode:
        self.travel(root, 0)
        return root

    def travel(self, root, now_sum):
        # 递归出口
        if root is None:
            return now_sum
        # 遍历右子树 再遍历左子树

        now_sum = self.travel(root.right, now_sum)
        now_sum += root.val
        root.val = now_sum
        now_sum = self.travel(root.left, now_sum)

        return now_sum


class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        if root is None:
            return []
        self.res = []
        pre_str = str(root.val)
        # edge case [1], [1,2]
        if (root.left):
            self.travel(root.left, pre_str)
        if(root.right):
            self.travel(root.right, pre_str)
        if(not (root.left or root.right)):
            self.res.append(pre_str)
        return self.res

    def travel(self, root, pre_str):
        # stop condition of recursive
        print(pre_str)
        new_str = pre_str + '->'+str(root.val)
        if(root.left):
            self.travel(root.left, new_str)
        if(root.right):
            self.travel(root.right, new_str)
        if(not (root.left or root.right)):
            self.res.append(new_str)
            return

# 更加简洁的表达


def binaryTreePaths(self, root):
    if not root:
        return []
    res = []
    self.dfs(root, "", res)
    return res


def dfs(self, root, ls, res):
    if not root.left and not root.right:
        res.append(ls+str(root.val))
    if root.left:
        self.dfs(root.left, ls+str(root.val)+"->", res)
    if root.right:
        self.dfs(root.right, ls+str(root.val)+"->", res)

 # we have to make sure every subtree is balanced so we can compare the root
    # so I set a Boolean variable balanced. and we need another vaiable to record height

    def isBalanced(self, root):
        balanced, _ = self.validate(root)
        return balanced

    def validate(self, root):
        # end condion if there is no subtrees of the root just return True and height 0
        if root is None:
            return True, 0

        balanced, leftHeight = self.validate(root.left)
        # if a subtree is not balanced just return false directly beacause there is meaningless to keep searching
        if not balanced:
            return False, 0
        balanced, rightHeight = self.validate(root.right)
        if not balanced:
            return False, 0
        # after got the info of subtrees lets compare
        return abs(leftHeight - rightHeight) <= 1, max(leftHeight, rightHeight) + 1


class Solution:
    def findBottomLeftValue(self, root: TreeNode) -> int:
        # BFS search in each level and use res to record the first element in each level
        res = root.val
        queue = deque([root])
        while(queue):
            res = queue[0].val
            for _ in range(len(queue)):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return res


class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        # BFS get the max height of the tree
        if not root:
            return 0
        res = 0
        queue = deque([root])
        while(queue):
            res += 1
            for _ in range(len(queue)):
                node = queue.popleft()
                if node.left:
                    queue.append(node.left)
                if node.right:
                    queue.append(node.right)
        return res


class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        # use in-order traversal only compare to lastnode, save memory
        self.last_node = None
        self.isValid = True
        self.dfs(root)
        return self.isValid

    def dfs(self, root):
        if not root:
            return
        self.dfs(root.left)
        if self.last_node and root.val <= self.last_node.val:
            self.isValid = False
            return
        self.last_node = root
        self.dfs(root.right)
