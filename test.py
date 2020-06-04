class Solution:
    """
    @param root: The root of binary tree.
    @return: True if this Binary tree is Balanced, or false.
    """
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
