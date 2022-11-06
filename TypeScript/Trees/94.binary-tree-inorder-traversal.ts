function inorderTraversal(root: TreeNode | null): number[] {
  let res = []
  dfs(root)
  return res
  function dfs(node: TreeNode | null) {
    if (!node) {
      return
    }
    dfs(node.left)
    res.push(node.val)
    dfs(node.right)
  }
}
