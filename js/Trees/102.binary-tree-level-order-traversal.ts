function levelOrder(root: TreeNode | null): number[][] {
  let res: number[][] = []
  function dfs(root: TreeNode | null, depth: number) {
    if (!root) {
      return
    }
    if (res.length == depth) {
      res.push([])
    }
    res[depth].push(root.val)
    dfs(root.left, depth + 1)
    dfs(root.right, depth + 1)
  }
  dfs(root, 0)
  return res
}

