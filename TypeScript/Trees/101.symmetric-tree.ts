function isSymmetric(root: TreeNode | null): boolean {
  return symHelper(root, root)
  function symHelper(l: TreeNode | null, r: TreeNode | null) {
    if (!l && !r) return true
    if (!l || !r) return false
    return (
      l.val == r.val && symHelper(l.right, r.left) && symHelper(l.left, r.right)
    )
  }
}
