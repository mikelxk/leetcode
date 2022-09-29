function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (root === p || root === q || !root) {
    return root
  }
  let l = lowestCommonAncestor(root.left, p, q)
  let r = lowestCommonAncestor(root.right, p, q)
  if (l && r) {
    return root
  }
  return l ? l : r
}
