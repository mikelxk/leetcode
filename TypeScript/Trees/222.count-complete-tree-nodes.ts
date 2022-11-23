function countNodes(root: TreeNode | null): number {
  return root ? 1 + countNodes(root.right) + countNodes(root.left) : 0
}
