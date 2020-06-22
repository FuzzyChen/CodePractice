# 101. Symmetric Tree


class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if not root:
            return True
        stack = [root.left, root.right]
        while (stack):
            r = stack.pop()
            l = stack.pop()
            if not (r or l):
                continue
            if l is None or r is None:
                return False
            if not l.val == r.val:
                return False
            stack.append(l.left)
            stack.append(r.right)
            stack.append(l.right)
            stack.append(r.left)
        return True
