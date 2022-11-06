function isBalanced(root: TreeNode | null): boolean {
  function getHeight(root: TreeNode | null): [number, boolean] {
    if (!root) {
      return [-1, true]
    }
    const [leftH, leftB] = getHeight(root.left)
    const [rightH, rightB] = getHeight(root.right)
    const balanaced = leftB && rightB && Math.abs(leftH - rightH) < 2
    return [1 + Math.max(leftH, rightH), balanaced]
  }
  return getHeight(root)[1]
}
