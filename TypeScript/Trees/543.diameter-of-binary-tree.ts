function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0
  function dfs(root: TreeNode | null) {
    if (!root) {
      return -1
    }
    const [left, right] = [dfs(root.left!), dfs(root.right!)]
    diameter = Math.max(diameter, 2 + left + right)
    return 1 + Math.max(left, right)
  }
  dfs(root)
  return diameter
}
