function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) {
    return true
  }
  if (!p || !q) {
    return false
  }
  return (
    isSameTree(p.left, q.left) && isSameTree(p.right, q.right) && p.val == q.val
  )
}
