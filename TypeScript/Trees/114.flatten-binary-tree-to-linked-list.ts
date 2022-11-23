function flatten(root: TreeNode | null): void {
  if (!root) {
    return
  }
  let node = root
  while (node) {
    if (node.left) {
      let rightMost = node.left
      while (rightMost.right) {
        rightMost = rightMost.right
      }
      rightMost.right = node.right
      node.right = node.left
      node.left = null
    }
    node = node.right
  }
}
