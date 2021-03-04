# 101. Symmetric Tree


def isSymmetric(self, root):
    if not root:
        return True
    return self.dfs(root.left, root.right)


def dfs(self, l, r):
    if l and r:
        return l.val == r.val and self.dfs(l.left, r.right) and self.dfs(l.right, r.left)
    return l == r


def isSymmetric(self, root: TreeNode) -> bool:
    if not root:
        return True
    queue = deque([root])
    while (queue):
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            if node.left:
                queue.append(node.left)
            else:
                queue.append(TreeNode())
            if node.right:
                queue.append(node.right)
            else:
                queue.append(TreeNode())
        if level != level[::-1]:
            return False
    return True


# 543. Diameter of Binary Tree

class Solution:
    def __init__(self):
        self.maxL = 0

    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        self.dfs(root)
        return self.maxL

    def dfs(self, root):
        if not root:
            return 0
        l = self.dfs(root.left)
        r = self.dfs(root.right)
        self.maxL = max(self.maxL, l+r)
        return 1+max(l, r)


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # find the deadlock
        # dfs visit visited
        # time limit
        for node in range(numCourses):
            if not self.dfs(node, prerequisites, {}):
                return False
        return True

    def dfs(self, node, pre, rec):
        if node in rec and rec[node] == 'visited':
            return True
        if node in rec and rec[node] == 'visiting':
            return False
        rec[node] = 'visiting'
        for i in pre:
            if i[0] == node:
                if not self.dfs(i[1], pre, rec):
                    return False
        rec[node] = 'visited'

        return True
