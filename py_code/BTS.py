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

# dfs and stack


class Solution:
    def mergeTrees(self, t1: TreeNode, t2: TreeNode) -> TreeNode:
        # End condition
        if t1 is None:
            return t2
        if t2 is None:
            return t1
        t3 = TreeNode(t1.val + t2.val)
        t3.left = self.mergeTrees(t1.left, t2.left)
        t3.right = self.mergeTrees(t1.right, t2.right)
        return t3


class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        return self.pre(root)

    def pre(self, root):
        if not root:
            return []

        return [root.val] + self.pre(root.left) + self.pre(root.right)


class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        res = []
        stack = [root]
        while stack:
            node = stack.pop()
            res.append(node.val)
            if node.right:
                stack.append(node.right)
            if node.left:
                stack.append(node.left)
        return res


class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        self.dfs(root, res)
        return res

    def dfs(self, root, res):
        if not root:
            return
        self.dfs(root.left, res)
        res.append(root.val)
        self.dfs(root.right, res)


# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# 105. Construct Binary Tree from Preorder and Inorder Traversal
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        if not inorder:
            return None
        head = TreeNode(preorder[0])

        index = inorder.index(head.val)
        left_in = inorder[:index]
        right_in = inorder[index+1:]
        left_pre = preorder[1:index+1]
        right_pre = preorder[index+1:]

        head.left = self.buildTree(left_pre, left_in)
        head.right = self.buildTree(right_pre, right_in)

        return head
# 124. Binary Tree Maximum Path Sum

    def maxPathSum(self, root: TreeNode) -> int:
        # post order traversal
        if not root:
            return 0
        self.ans = root.val
        self.dfs(root)
        return self.ans

    def dfs(self, root):
        if not root:
            return 0
        left = max(0, self.dfs(root.left))
        right = max(0, self.dfs(root.right))
        self.ans = max(self.ans, left+right+root.val)
        return max(left, right)+root.val

# 99 BTS


def recoverTree(self, root: TreeNode) -> None:
        """
        inorder traversal --- sort --- change the val
        """
        list_val, list_node = [], []
        self.inorder(root, list_val, list_node)
        list_val.sort()
        for i in range(len(list_node)):
            list_node[i].val = list_val[i]

    def inorder(self,root,list_val,list_node):
        if not root:
            return
        self.inorder(root.left,list_val,list_node)
        list_val.append(root.val)
        list_node.append(root)
        self.inorder(root.right,list_val,list_node)
